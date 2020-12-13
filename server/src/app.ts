import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { createConnection } from 'typeorm';
import { dbConn } from './database/index';
import Routes from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
import { logger, stream } from './utils/logger';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.SERVER_PORT || 8080;
    this.env = process.env.NODE_ENV || 'development';

    this.connectToDatabase();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initErrorHandling();
  }

  public getServer() {
    return this.app;
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`🚀 App listening on the port ${this.port}`);
    });
  }

  private connectToDatabase() {
    createConnection(dbConn)
      .then(() => {
        logger.info('🟢 The database is connected.');
      })
      .catch((error: Error) => {
        logger.error(`🔴 Unable to connect to the database: ${error}.`);
      });
  }

  private initMiddlewares() {
    if (this.env === 'production') {
      this.app.use(morgan('combined', { stream }));
      this.app.use(cors({ origin: 'hipages.com.au', credentials: true }));
    } else if (this.env === 'development') {
      this.app.use(morgan('dev', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
    }
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private initErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;

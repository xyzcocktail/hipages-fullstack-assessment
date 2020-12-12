import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import JobsRoute from './routes/jobs.route';

const app = new App([
  new IndexRoute(),
  new JobsRoute(),
]);

app.listen();

import { ConnectionOptions } from 'typeorm';

const env = process.env.NODE_ENV || 'development';
const dbConn: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'database',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || 'hipages',
  database: process.env.MYSQL_DATABASE || 'hipages',
  synchronize: false,
  logging: false,
  entities: [env === 'production' ? 'dist/models/entity/*{.ts,.js}' : 'src/models/entity/*{.ts,.js}'],
  migrations: [env === 'production' ? 'dist/models/migration/*{.ts,.js}' : 'src/models/migration/*{.ts,.js}'],
  subscribers: [env === 'production' ? 'dist/models/subscriber/*{.ts,.js}' : 'src/models/subscriber/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/models/entity',
    migrationsDir: 'src/models/migration',
    subscribersDir: 'src/models/subscriber',
  },
};

export { dbConn };

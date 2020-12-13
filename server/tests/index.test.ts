import 'dotenv/config';
import * as request from 'supertest';
import App from '../src/app';
import IndexRoute from '../src/routes/index.route';

let app: App;

beforeAll(async () => {
  const indexRoute = new IndexRoute();
  app = new App([indexRoute]);
});

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});

describe('Testing Index: ', () => {
  describe('[GET] /', () => {
    test('should return 200', async () => {
      return request(app.getServer()).get('/').expect(200);
    });
  });
});

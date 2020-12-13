import 'dotenv/config';
import { createConnection } from 'typeorm';
import { dbConn } from '../database';
import { IJob, IJobDetail } from '../interfaces/job.interface';
import JobQueryService from '../services/jobs.query.service';

let db;
let jobService: JobQueryService;

beforeAll(async () => {
  db = await createConnection(dbConn);
  jobService = new JobQueryService();
});

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
});

describe('Testing query service jobs: ', () => {
  describe('Function findAll ',() => {
    it('should get all Jobs data', async () => {
      const resp: IJob[] = await jobService.findAll([]);
      return expect(resp).not.toHaveLength(0);
    });
  });

  describe('Function findOneById ', () => {
    it('should get one JobDetail object data', async () => {
      const resp: IJob = await jobService.findOneById(1);
      expect(resp).toHaveProperty('id', 1);
      expect(resp).toHaveProperty('suburb');
      expect(resp).toHaveProperty('category');
      return expect(resp).toHaveProperty('status');
    });
  });

  describe('Function updateJobStatus ', () => {
    it('should return JobDetail object data ', async () => {

    });
  });
});

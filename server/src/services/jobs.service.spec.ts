import 'dotenv/config';
import { createConnection } from 'typeorm';
import { dbConn } from '../database';
import { IJob } from '../interfaces/job.interface';
import JobService from '../services/jobs.service';

let db;
let jobService: JobService;

beforeAll(async () => {
  db = await createConnection(dbConn);
  jobService = new JobService();
});

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
});

describe('Testing Service Jobs: ', () => {
  it('func findAll should get all Jobs data', async () => {
    const resp: IJob[] = await jobService.findAll();
    return expect(resp).not.toHaveLength(0);
  });

  it('func findOneById should get one Job data belonging to id', async () => {
    const resp: IJob = await jobService.findOneById(1);
    expect(resp).toHaveProperty('id', 1);
    return expect(resp).toHaveProperty('status');
  });
});

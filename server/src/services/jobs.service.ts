import { getConnection, getRepository } from 'typeorm';
import HttpException from '../utils/HttpException';
import { IJob } from '../interfaces/job.interface';
import { JobEntity } from '../models/entity/jobs.entity';

class JobService {
  public jobs = JobEntity;

  public async findAll(): Promise<IJob[]> {
    const jobRepository = getRepository(this.jobs);
    const jobs: IJob[] = await jobRepository.find();
    return jobs;
  }

  public async findOneById(jobId: number): Promise<IJob> {
    const jobRepository = getRepository(this.jobs);
    const retJob: IJob = await jobRepository.findOne({ where: { id: jobId } });
    if (!retJob) {
      throw new HttpException(409, 'Not found!');
    }
    return retJob;
  }
}

export default JobService;

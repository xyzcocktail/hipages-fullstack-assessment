import { getConnection, getRepository } from 'typeorm';
import HttpException from '../utils/HttpException';
import { IJob, IJobDetail } from '../interfaces/job.interface';
import { JobEntity, JobDetailEntity } from '../models/entity/jobs.entity';
import { isEmpty } from '../utils/util';

class JobService {
  public jobs = JobDetailEntity;

  public async findAll(): Promise<IJobDetail[]> {
    const jobRepository = getRepository(this.jobs);
    const jobs: IJobDetail[] = await jobRepository.find({
      join: {
        alias: 'jobs',
        leftJoinAndSelect: {
          suburb: 'jobs.suburb',
          category: 'jobs.category',
        },
      },
    });
    return jobs;
  }

  public async findOneById(jobId: number): Promise<IJobDetail> {
    const jobRepository = getRepository(this.jobs);
    const retJob: IJobDetail = await jobRepository.findOne({ where: { id: jobId } });
    if (!retJob) {
      throw new HttpException(409, 'Not found!');
    }
    return retJob;
  }
}

export default JobService;

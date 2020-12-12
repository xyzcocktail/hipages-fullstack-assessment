import { getRepository } from 'typeorm';
import HttpException from '../utils/HttpException';
import { Job } from '../interfaces/job.interface';
import { JobEntity } from '../models/entity/jobs.entity';
import { isEmpty } from '../utils/util';

class JobService {
  public jobs = JobEntity;

  public async findAll(): Promise<Job[]> {
    const jobRepository = getRepository(this.jobs);
    const jobs: Job[] = await jobRepository.find();
    return jobs;
  }

  public async findJobById(jobId: number): Promise<Job> {
    const jobRepository = getRepository(this.jobs);
    const retJob: Job = await jobRepository.findOne({ where: { id: jobId } });
    if (!retJob) {
      throw new HttpException(409, 'Not found!');
    }
    return retJob;
  }

  public async updateJob(jobId: number, jobData: Job): Promise<Job> {
    if (isEmpty(jobData)) {
      throw new HttpException(400, 'Empty jobData!');
    }
    const jobRepository = getRepository(this.jobs);
    const retJob: Job = await jobRepository.findOne({ where: { id: jobId } });
    if (!retJob) {
      throw new HttpException(409, 'Not found!');
    }
    // await jobRepository.update(jobId, { ...jobData });

    const updatedJob: Job = await jobRepository.findOne({ where: { id: jobId } });
    return updatedJob;
  }
}

export default JobService;

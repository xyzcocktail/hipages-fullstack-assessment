import { NextFunction, Request, Response } from 'express';
import { IJob, IJobDetail } from '../interfaces/job.interface';
import jobService from '../services/jobs.query.service';

class JobsController {
  public jobService = new jobService();

  public getJobs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const retJobsData: IJobDetail[] = await this.jobService.findAll([]);

      res.status(200).json({ message: 'Successful', type: 'IJobsDetails', data: retJobsData });
    } catch (error) {
      next(error);
    }
  };

  public getJobById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const jobId = Number(req.params.id);
      const retJobData: IJobDetail = await this.jobService.findOneById(jobId);

      res.status(200).json({ message: 'Successful', type: 'IJobsDetail', data: retJobData });
    } catch (error) {
      next(error);
    }
  };

  public updateJobStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const jobId = Number(req.params.id);
      const jobData: IJob = req.body;
      const retJobData: IJob = await this.jobService.updateJobStatus(jobId, jobData);

      res.status(200).json({ message: 'Updated Successfully', type: 'IJobsDetail', data: retJobData });
    } catch (error) {
      next(error);
    }
  };
}

export default JobsController;

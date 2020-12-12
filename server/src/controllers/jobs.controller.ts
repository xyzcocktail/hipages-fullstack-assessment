import { NextFunction, Request, Response } from 'express';
import { Job } from '../interfaces/job.interface';
import jobService from '../services/jobs.service';

class JobsController {
  public jobService = new jobService();

  public getJobs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const retJobsData: Job[] = await this.jobService.findAll();

      res.status(200).json({ data: retJobsData, message: 'Successful [Jobs]' });
    } catch (error) {
      next(error);
    }
  };

  public getJobById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const jobId = Number(req.params.id);
      const retJobData: Job = await this.jobService.findJobById(jobId);

      res.status(200).json({ data: retJobData, message: 'Successful {Job}' });
    } catch (error) {
      next(error);
    }
  };

  public updateJob = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const jobId = Number(req.params.id);
      const jobData: Job = req.body;
      const retJobData: Job = await this.jobService.updateJob(jobId, jobData);

      res.status(200).json({ data: retJobData, message: 'Successful {Job}' });
    } catch (error) {
      next(error);
    }
  };
}

export default JobsController;

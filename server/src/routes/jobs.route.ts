import { Router } from 'express';
import validationMiddleware from '../middlewares/validation.middleware';
import Route from '../interfaces/routes.interface';
import JobsController from '../controllers/jobs.controller';

class JobsRoute implements Route {
  public path = '/api/jobs';
  public router = Router();
  public jobsController = new JobsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.jobsController.getJobs);
    this.router.get(`${this.path}/:id(\\d+)`, this.jobsController.getJobById);
    this.router.put(`${this.path}/:id(\\d+)`, this.jobsController.updateJob);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.jobsController.updateUser);
  }
}

export default JobsRoute;

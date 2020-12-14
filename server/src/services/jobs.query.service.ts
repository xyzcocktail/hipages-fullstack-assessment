import { getConnection, getManager, getRepository } from 'typeorm';
import * as dottie from 'dottie';
import * as moment from 'moment';
import HttpException from '../utils/HttpException';
import { IJob, IJobDetail } from '../interfaces/job.interface';
import { JobEntity, JobDetailEntity } from '../models/entity/jobs.entity';
import { isEmpty } from '../utils/util';

class JobQueryService {
  public jobs = JobDetailEntity;

  public async findAll(ids: number[]): Promise<IJobDetail[]> {
    const results: IJobDetail[] = [];
    const WHERE = !isEmpty(ids) ? ` AND j.id IN( ${ids.join(',')} ) ` : '';
    const sql = `
      SELECT
        j.id AS id,
        j.status AS status,
        j.suburb_id AS suburbId,
        j.category_id AS categoryId,
        j.contact_name AS contactName,
        j.contact_phone AS contactPhone,
        j.contact_email AS contactEmail,
        j.price AS price,
        j.description AS description,
        j.created_at AS createdAt,
        j.updated_at AS updatedAt,
        s.id AS suburb__id,
        s.name AS suburb__name,
        s.postcode AS suburb__postcode,
        c.id AS category__id,
        c.name AS category__name,
        c.parent_category_id AS category__parentCategoryId,
        cp.name AS category__parentName
      FROM jobs AS j
        LEFT JOIN suburbs AS s ON(j.suburb_id = s.id)
        LEFT JOIN categories AS c ON(j.category_id = c.id)
        LEFT JOIN categories AS cp ON(c.parent_category_id = cp.id)
      WHERE 1 ${WHERE}
      ORDER BY j.created_at ASC
    `;
    const jobs: IJobDetail[] = await getManager().query(sql);
    if (!isEmpty(jobs)) {
      jobs.forEach((item: IJobDetail) => {
        const rowItem = dottie.transform(item, { delimiter: '__' });
        results.push(rowItem);
      });
    }
    return results;
  }

  public async findOneById(jobId: number): Promise<IJobDetail> {
    if (isEmpty(jobId)) {
      throw new HttpException(400, 'Empty jobId!');
    }
    const retJobs: IJobDetail[] = await this.findAll([jobId]);
    if (isEmpty(retJobs)) {
      throw new HttpException(409, 'Not found!');
    } else {
      return retJobs[0];
    }
  }

  public async updateJobStatus(jobId: number, jobData): Promise<IJob> {
    if (isEmpty(jobData)) {
      throw new HttpException(400, 'Empty data [IJob]!');
    }
    const retUpdate = await getConnection()
      .createQueryBuilder()
      .update(JobEntity)
      .set({ status: jobData.status })
      .where('id = :id', { id: jobId })
      .execute();
    return await this.findOneById(jobId);
  }

  public async resetAll(): Promise<IJobDetail[]> {
    const retReset = await getConnection()
      .createQueryBuilder()
      .update(JobEntity)
      .set({ status: 'new', updatedAt: null })
      .execute();
    return await this.findAll([]);
  }
}

export default JobQueryService;

import { ICategory } from './category.interface';
import { ISuburb } from './suburb.interface';

export interface IJob {
  id: number,
  status: string,
  suburbId: number,
  categoryId: number,
  contactName: string,
  contactPhone: string,
  contactEmail: string,
  price: number,
  description: string,
}

export interface IJobDetail extends IJob {
  category: ICategory,
  suburb: ISuburb,
}

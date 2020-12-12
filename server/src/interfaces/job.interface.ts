import { Category } from './category.interface';
import { Suburb } from './suburb.interface';

export interface Job {
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

export interface JobDetail extends Job {
  category: Category,
  suburb: Suburb,
}

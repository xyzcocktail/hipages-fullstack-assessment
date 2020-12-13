import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ICategory } from '../../interfaces/category.interface';

@Entity('categories')
export class CategoryEntity implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 255 })
  @IsNotEmpty()
  name: string;

  @Column({ name: 'parent_category_id', nullable: true })
  parentCategoryId: number;
};

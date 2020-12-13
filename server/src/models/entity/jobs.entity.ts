import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { IJob } from '../../interfaces/job.interface';
import { CategoryEntity } from './category.entity';
import { SuburbEntity } from './suburb.entity';

export type enumStatusText = 'new' | 'accepted' | 'declined';

@Entity('jobs')
export abstract class JobEntity implements IJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['new', 'accepted', 'declined'],
    default: 'new',
  })
  @IsNotEmpty()
  status: enumStatusText;

  @Column({ name: 'suburb_id' })
  @IsNotEmpty()
  suburbId: number;

  @Column({ name: 'category_id' })
  @IsNotEmpty()
  categoryId: number;

  @Column({ name: 'contact_name', length: 255 })
  @IsNotEmpty()
  contactName: string;

  @Column({ name: 'contact_phone', length: 255 })
  @IsNotEmpty()
  contactPhone: string;

  @Column({ name: 'contact_email', length: 255 })
  @IsNotEmpty()
  contactEmail: string;

  @Column()
  @IsNotEmpty()
  price: number;

  @Column({ type: 'text' })
  @IsNotEmpty()
  description: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: number;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: number;
}

@Entity('jobs')
export class JobDetailEntity extends JobEntity {
  @OneToOne(() => SuburbEntity)
  @JoinColumn()
  suburb: SuburbEntity;

  @OneToOne(() => CategoryEntity)
  @JoinColumn()
  category: CategoryEntity;
}

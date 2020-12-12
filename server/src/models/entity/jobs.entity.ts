import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Job } from '../../interfaces/job.interface';

export type enumStatusText = 'new' | 'accepted' | 'declined';

@Entity('jobs')
// @Unique(['contactEmail'])
export class JobEntity implements Job {
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

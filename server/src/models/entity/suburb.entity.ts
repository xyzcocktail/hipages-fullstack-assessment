import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ISuburb } from '../../interfaces/suburb.interface';

@Entity('suburbs')
export class SuburbEntity implements ISuburb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 255 })
  @IsNotEmpty()
  name: string;

  @Column({ name: 'postcode', length: 4 })
  @IsNotEmpty()
  postcode: string;
};

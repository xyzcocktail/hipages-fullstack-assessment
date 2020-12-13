import { IsEmpty, IsString } from 'class-validator';

export class UpdateJobStatusDto {
  @IsEmpty()
  public id: number;

  @IsString()
  public status: string;
}

import { IsNotEmpty, IsEmail, IsMongoId, IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  title: string;
  @IsEmail()
  email: string;
  @IsOptional()
  @IsMongoId()
  supervisor: ObjectId;
  @IsNotEmpty()
  rank: string;
}

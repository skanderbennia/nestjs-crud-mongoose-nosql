import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class AffectEmployeeToDepartment {
  @IsNotEmpty()
  @IsMongoId()
  departmentId: ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  employeeId: ObjectId;
}

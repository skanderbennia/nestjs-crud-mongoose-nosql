import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class AffectSupervisorEmployee {
  @IsNotEmpty()
  @IsMongoId()
  supervisorId: ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  employeeId: ObjectId;
}

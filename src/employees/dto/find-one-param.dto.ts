import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class FindOneParam {
  @IsMongoId()
  id: ObjectId;
}

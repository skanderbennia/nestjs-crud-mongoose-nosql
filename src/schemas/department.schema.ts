import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DepartementDocument = HydratedDocument<Department>;

@Schema()
export class Department {
  @Prop()
  name: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);

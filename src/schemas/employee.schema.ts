import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Department } from './department.schema';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  name: string;
  @Prop()
  title: string;
  @Prop()
  email: string;
  @Prop()
  rank: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  supervisor: Employee;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  department: Department;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

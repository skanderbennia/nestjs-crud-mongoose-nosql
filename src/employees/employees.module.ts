import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee, EmployeeSchema } from 'src/schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from 'src/schemas/department.schema';
import { PermissionGuard } from 'src/permission.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, PermissionGuard],
})
export class EmployeesModule {}

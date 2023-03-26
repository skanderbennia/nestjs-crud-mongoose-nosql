import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from 'src/schemas/employee.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateEmployeeBody, UpdateEmployeeBody } from 'src/utils/types';
import { DepartementDocument, Department } from 'src/schemas/department.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    @InjectModel(Department.name)
    private departmentModel: Model<DepartementDocument>,
  ) {}
  async create(createEmployee: CreateEmployeeBody): Promise<Employee> {
    return await new this.employeeModel(createEmployee).save();
  }

  async findAll(): Promise<Array<Employee>> {
    return await this.employeeModel
      .find()
      .populate([{ path: 'supervisor', populate: 'department' }, 'department']);
  }

  async findOne(id: ObjectId): Promise<Employee> {
    return await this.employeeModel.findById(id);
  }

  async update(
    id: ObjectId,
    updateEmployee: UpdateEmployeeBody,
  ): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, updateEmployee);
  }

  async remove(id: ObjectId) {
    await this.employeeModel.findByIdAndDelete(id);
    return 'Employee is successfully deleted !';
  }
  async affectSupervisor(supervisorId: ObjectId, employeeId: ObjectId) {
    if (supervisorId != employeeId) {
      return "Employee can't be the supervisor of himself";
    }
    await this.employeeModel.findOneAndUpdate(employeeId, {
      supervisor: supervisorId,
    });
  }
  async affectToDepartment(departmentId: ObjectId, employeeId: ObjectId) {
    const selectedDepartment: Department = await this.departmentModel.findById(
      departmentId,
    );
    if (!selectedDepartment) {
      return 'Department does exist ';
    }
    await this.employeeModel.findOneAndUpdate(employeeId, {
      department: departmentId,
    });
    return `Employee was affected to ${selectedDepartment.name} department `;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DepartementDocument, Department } from 'src/schemas/department.schema';
import { Model } from 'mongoose';
@Injectable()
export class DepartmentsService {
  // constructor dependency injection
  constructor(
    @InjectModel(Department.name)
    private departmentModel: Model<DepartementDocument>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return new this.departmentModel(createDepartmentDto).save();
  }

  async findAll(): Promise<Array<Department>> {
    return this.departmentModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}

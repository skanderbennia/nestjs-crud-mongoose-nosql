import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ObjectId } from 'mongoose';
import { FindOneParam } from './dto/find-one-param.dto';
import { AffectSupervisorEmployee } from './dto/affect-supervisor-employee.dto';
import { AffectEmployeeToDepartment } from './dto/affect-employee-to-department.dto';
import { PermissionGuard } from 'src/permission.guard';
@UseGuards(PermissionGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParam) {
    return this.employeesService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.employeesService.remove(id);
  }

  @Post('/supervisor')
  affectSupervisor(@Body() body: AffectSupervisorEmployee) {
    return this.employeesService.affectSupervisor(
      body.supervisorId,
      body.employeeId,
    );
  }
  @Post('/department')
  affectToDepartment(@Body() body: AffectEmployeeToDepartment) {
    return this.employeesService.affectToDepartment(
      body.departmentId,
      body.employeeId,
    );
  }
}

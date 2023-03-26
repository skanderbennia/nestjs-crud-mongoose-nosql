import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    EmployeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'nest',
    }),
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './employee/user.entity';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { CompanyModule } from './company/company.module';
import { Company } from './company/entities/company.entity'
import { CompanyService } from './company/company.service';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'emp_dbs',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'company_dbs',
      entities: [Company],
      synchronize: true,
    }),
    EmployeeModule, CompanyModule,
    TypeOrmModule.forFeature([User,Company])

  ],

  providers: [EmployeeService, CompanyService],
  controllers: [EmployeeController, CompanyController],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
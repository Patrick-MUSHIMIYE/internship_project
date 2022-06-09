import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
import { User } from './employee/user.entity';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

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
    EmployeeModule,
    // TypeOrmModule.forRoot(),
    // EmployeeModule,
    TypeOrmModule.forFeature([User]),
  ],

  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeeService} from './employee.service';
import { EmpDto } from './employee.dto';
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  public async getEmployees(){
      return this.employeeService.getEmployees();

  }
  @Post()
  public async postEmployees(@Body() employee: EmpDto) {
      return this.employeeService.postEmployees(employee);
  }

  @Get(':id')
  public async getEmployeesById(@Param("id") employee_id: number) {
      return this.employeeService.getEmployeesById(employee_id);
  }

  @Delete()
  public async deleteEmployeesById(@Param("id") employee_id: number) {
      return this.employeeService.deleteEmployeesById(employee_id);
  }

  @Put(':id')
  public async putEmployeesById(@Param("id") employee_id: number, @Query() query) {
      const propertyName =  query.property_name;
      const propertyValue = query.property_value;
      return this.employeeService.putEmployeesById(employee_id, propertyName, propertyValue)
  }
}

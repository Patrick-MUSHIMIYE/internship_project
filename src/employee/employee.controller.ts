import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmpDto } from './employee.dto';
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  public async getEmployees() {
    return this.employeeService.getEmployees();
  }
  @Post()
  public async postEmployees(@Body() employee: EmpDto) {
    return this.employeeService.postEmployees(employee);
  }

  @Get(':employee_id')
  public async getEmployeesById(@Param('employee_id') employee_id: number) {
    return this.employeeService.getEmployeesById(employee_id);
  }

  @Delete(':employee_id')
  public async deleteEmployeesById(@Param('employee_id') employee_id: number) {
    return this.employeeService.deleteEmployeesById(employee_id);
  }

  @Put(':employee_id')
  public async putEmployeesById(@Param('employee_id') employee_id: number){
    return this.employeeService.putEmployeesById;
  }
}
// @Patch(':comp_nbr')
//   update_company(@Param('comp_nbr') comp_nbr: number, @Body() updateCompanyDto:UpdateCompanyDto) {
//     return this.companyService.update_company(comp_nbr, updateCompanyDto);
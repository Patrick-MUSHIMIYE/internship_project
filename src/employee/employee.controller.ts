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
import * as SendGrid from '@sendgrid/mail';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  public async getEmployees() {
    return this.employeeService.getEmployees();
  }
  @Post()
  public async postEmployees(@Body() employee: EmpDto) {
    // return this.employeeService.postEmployees(employee);
    this.employeeService.postEmployees(employee);


    const mailContent = {
      to: 'ntwari.hugues@gmail.com',
      from: "ntwari.hugues@gmail.com",
      subject: 'PATCHU_SUB',
      text:'hello world',
      html: '<h1> Hello world!</h1>'
    };
    try {

      SendGrid.setApiKey("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");
      const transport = await SendGrid.send(mailContent);
      console.log("email sent");
      
      return transport;
    } catch (e) {
      console.log(e.message);
    }
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
import { HttpException, Injectable, Param } from '@nestjs/common';
import { EMPLOYEES } from './employees.mock';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { EmpDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  // private Emp = EMPLOYEES;// employee array declaration

 
  public postEmployees(employeeRequest: EmpDto) {
    const employee = new User ();
    employee.employee_name = employeeRequest.employee_name;
    employee.company_name = employeeRequest.company_name;
    // return this.Emp.push(employee); // return in arrays
    return employee.save();
  }

  public async getEmployees() {
    const employees = await User.find()
    return employees;
  }
  public async getEmployeesById(employee_id: number){
    const employee = await User.findOne({where: {employee_id: employee_id}});
    if (!employee){
      throw new HttpException("Not found", 404);
    }
    return employee;
  }
  public async deleteEmployeesById(employee_id: number){
    const employee = await User.findOne({where: {employee_id: employee_id}})
      if (!employee) {
        throw new HttpException('not found', 404);
      }
      await User.delete(employee_id);
      
    }
  public async putEmployeesById(employee_id: number, employee_name: string, company_name: string){
    const employees = await User.findOne({where: {employee_id: employee_id}});
    if (!employees){
      throw new HttpException('not found', 404);
    }
     employees.employee_name = employee_name;
     employees.company_name = company_name;
    return employees.save();
    
  }
}
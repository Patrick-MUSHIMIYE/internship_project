import { HttpException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { comp } from './company.mocks';
import { EMPLOYEES } from 'src/employee/employees.mock';
@Injectable()
export class CompanyService {
  private companies_name = comp;

  public create_company(company) {
    // return 'This action adds a new company';
    return this.companies_name.push(company);
  }
  public get_company() {
    return this.companies_name;
  }
  // findAll() {
  //   // return `This action returns all company`;
  //   return this.companies_name;

  // }

  public findOne_company(comp_nbr: number) {
    const company = this.companies_name.find(comp => comp.comp_nbr === comp_nbr);
    if (!company) {
      throw new HttpException('not found', 404);
    }
    return (company);
    }
    // return `This action returns a #${employee_id} company`;
  public update_company(comp_nbr: number, comp_name: string, address: string, updateCompanyDto: UpdateCompanyDto) {
    const index = this.companies_name.findIndex(comp => comp.comp_nbr === comp_nbr)
    if (index === -1) {
      throw new HttpException('not found', 404);
    }
    this.companies_name[index];
    return this.companies_name;
  }

  public remove_company(comp_nbr: number) {
    const index = this.companies_name.findIndex(comp => comp.comp_nbr === comp_nbr);
    if (index === -1) {
      throw new HttpException('not found', 404);
    }
    this.companies_name.splice(index, 1);
    return this.companies_name;
    }
  }
  // public putEmployeesById(id: number, propertyName: string, propertyValue: string){
  //     const index = this.Emp.findIndex(employee => employee.employee_id === id);
  //     if (index === -1){
  //         throw new HttpException('not found', 404);
  //     }
  //     this.Emp[index][propertyName] = propertyValue;
  //     return this.Emp;
  // }

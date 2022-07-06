import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {comp} from './company.mocks';
@Injectable()
export class CompanyService {
  // private companies_name = comp;// arrays declaration

  public create_company(companyRequest: CreateCompanyDto) {
    // return this.companies_name.push(company); // Return arrays
    const company = new Company();
    company.Address = companyRequest.Address;
    company.Comp_name = companyRequest.Comp_name;
    return company.save();
  }
  public async get_company() {
    // return this.companies_name; // return array
    const companies = await Company.find();
    return companies;
  }
  // findAll() {
  //   // return `This action returns all company`;
  //   return this.companies_name;

  // }

  public findOne_company(comp_nbr: number) {
    const company = Company.findOne({where:{comp_id: comp_nbr}});
    if (!company) {
      throw new HttpException('not found', 404);
    }
    return (company);
    }
    // return `This action returns a #${employee_id} company`;
  public async update_company(comp_nbr:number,updateUserDto:UpdateCompanyDto) {
    const company =  await Company.findOne({where:{comp_id: comp_nbr}});
    if (!company) {
      throw new NotFoundException("Company not found");
    }
   company.Address=updateUserDto.Address;
   company.Comp_name= updateUserDto.Comp_name;
   return company.save();
  //   const company = await Company.findOne({where: {comp_id:id}});
  //   if (!company) {
  //     throw new HttpException('not found', 404);
  //   }
  //   return Company.update(id,updateUserDto);
  }


  public async remove_company(comp_nbr: number) {
    const company = await Company.findOne({where: {comp_id: comp_nbr}});
    if (!company) {
      throw new HttpException('not found', 404);
    }
    // this.companies_name.splice(index, 1); utilized for only array
    // return this.companies_name;
    await Company.delete(comp_nbr);
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
  
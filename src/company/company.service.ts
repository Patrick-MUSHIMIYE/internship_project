import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
@Injectable()
export class CompanyService {

  public create_company(companyRequest: CreateCompanyDto) {
    const company =new Company();
    company.Address=companyRequest.Address;
    company.comp_name=companyRequest.Comp_name;
    return company.save();
  }
  public async get_company() {

     const companies = await Company.find();
     return companies;
  }
  // findAll() {
  //   // return `This action returns all company`;
  //   return this.companies_name;

  // }

  public findOne_company(id: number) {
    const company =  Company.findOne({where:{id:id}});
    if (!company) {
      throw new HttpException('not found', 404);
    }
    return (company);
    }
    // return `This action returns a #${employee_id} company`;
  public async update_company(comp_nbr: number, comp_name: string, address: string) {
    const company =  await Company.findOne({where:{id: comp_nbr}});
    if (!company) {
      throw new NotFoundException("Company not found");
    }
   company.Address=address;
   company.comp_name=comp_name;
   return company.save();

  }

  public async remove_company(comp_nbr: number) {
    const company =  await Company.findOne({where:{id: comp_nbr}});
    if (!company) {
      throw new NotFoundException("Company not found");
    }

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

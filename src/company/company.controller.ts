import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { comp } from './company.mocks';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create_company(@Body() company: CreateCompanyDto ) {
    console.log(company);
    return this.companyService.create_company(company);
  }

  @Get()
  get_company() {
    return this.companyService.get_company();
  }

  @Get(':comp_nbr')
  findOne_company(@Param('comp_nbr') comp_nbr: number) {
    return this.companyService.findOne_company(comp_nbr);
  }

  @Patch(':comp_nbr')
  update_company(@Param('comp_nbr') comp_nbr: number, @Body() comp_name: string, address: string) {
    return this.companyService.update_company(comp_nbr, comp_name, address,);
  }

  @Delete(':comp_nbr')
  remove_company(@Param('comp_nbr') comp_nbr: number) {
    return this.companyService.remove_company(comp_nbr);
  }
}

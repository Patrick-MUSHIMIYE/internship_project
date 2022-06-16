import { ApiProperty } from "@nestjs/swagger";

export class EmpDto {
  @ApiProperty()
  employee_id: number;

  @ApiProperty()
  employee_name: string;

  @ApiProperty()
  company_name: string;
}

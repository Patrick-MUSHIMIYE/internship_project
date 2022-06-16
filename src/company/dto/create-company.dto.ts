import { ApiProperty} from "@nestjs/swagger"

export class CreateCompanyDto {
    @ApiProperty()
    comp_nbr : number;

    @ApiProperty()
    Comp_name: string;

    @ApiProperty()
    Address: string;
}

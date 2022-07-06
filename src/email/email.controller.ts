import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
@Controller('email')
// export class EmailController {
//   constructor(private readonly emailService: EmailService) {}

//   @Post()
//   create(@Body() createEmailDto: CreateEmailDto) {
//     return this.emailService.create(createEmailDto);
//   }

//   @Get()
//   findAll() {
//     return this.emailService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.emailService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
//     return this.emailService.update(+id, updateEmailDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.emailService.remove(+id);
//   }
export class EmailController {
  constructor(private readonly EmailService: EmailService) {}

  @Get()
  sendMail(): any {
    return this.EmailService.example();
  }

  @Get('template')
  sendTemplate(): any {
    return this.EmailService.example2();
  }
}

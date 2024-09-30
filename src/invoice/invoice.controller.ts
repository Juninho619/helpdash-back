import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { GetUser } from 'src/auth';
import { Client, User } from '@prisma/client';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('/all')
  getAllInvoices(){
    return this.invoiceService.getAllInvoices
  }

  @Post('/create')
  createInvoice(@Body() dto: CreateInvoicedto, @GetUser() user: User, client: Client){
    return this.invoiceService.createInvoice(dto, user, client)
  }

  @Patch('/update')
  updateInvoice(@Body() dto: CreateInvoicedto, @Param('id') user: User){
    return this.invoiceService.updateInvoice(dto, user.id)
  }

  @Delete('/delete')
  deleteInvoice(@Param('id') id: number){
    return this.invoiceService.deleteInvoice(id)
  }

}

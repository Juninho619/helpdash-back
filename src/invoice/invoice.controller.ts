import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { GetUser } from 'src/auth';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';

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

  // Update endpoint
  @Patch('/update')
  updateInvoice(@Param('id') id:string, @Body()dto: UpdateInvoiceDto){
    return this.invoiceService.updateInvoice(id, dto)
  }

  @Delete('/delete')
  deleteInvoice(@Param('id') id: string){
    return this.invoiceService.deleteInvoice(id)
  }

}

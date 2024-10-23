import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { GetUser } from 'src/auth';
import { User } from '@prisma/client';


@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('/all')
  getAllTickets(){
    return this.ticketService.getAllTickets()
  }

  @Get('/my/:id')
  getMyTickets(userId: string){
    return this.ticketService.getMyTickets(userId)
  }
  
  @Post('/create')
  createTicket(@Body() dto: InsertTicketDto, @GetUser() user: User){
    return this.ticketService.createTicket(dto, user)
  }

  @Patch('/update/:id')
  insertTicket(@Body() dto: InsertTicketDto, @Param('id') user: User) {
    return this.ticketService.createTicket(dto, user);
  }

  @Delete('/delete/:id')
  deleteTicket(@Param('id') id: string){
    return this.ticketService.deleteTicket(id)
  }
  

}

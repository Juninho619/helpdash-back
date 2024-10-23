import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { User } from '@prisma/client';
import { UpdateTicketDto } from './dto/update.ticket.dto';
import { GetUser } from 'src/auth';
import { JwtGuard } from 'src/auth/guard';


@UseGuards(JwtGuard)
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('/all')
  getAllTickets(){
    return this.ticketService.getAllTickets()
  }

  @Get('/my')
  getMyTickets(@GetUser()user: User){
    return this.ticketService.getMyTickets(user.id)
  }
  
  @Post('/create')
  createTicket(@Body() dto: InsertTicketDto, @GetUser() user: User){    
    return this.ticketService.createTicket(dto, user.id)
  }

  @Patch('/update/:id')
    updateTicket(
    @Body() dto: UpdateTicketDto,
    @Param('id') ticketId: string,
    @GetUser() user: User
) {
    return this.ticketService.updateTicket(ticketId, dto, user.id); 
}
  
  @Delete('/delete/:id')
  deleteTicket(@Param('id') id: string, @GetUser() user: User){
    return this.ticketService.deleteTicket(id, user.id)
  }
}

import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create.client.dto';
import { GetUser } from 'src/auth';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @HttpCode(200)
  @Get('/all')
  getMyclients(userId: string){
    return this.clientService.getMyclients(userId)
  }

  @HttpCode(201)
  @Post('/create')
  createClient(@Body() dto: CreateClientDto, @GetUser() user: User){
    return this.clientService.createClient(dto, user.id)
  }

  @HttpCode(200)
  @Patch('/update/:id')
  updateClient(@Body() newClientName: string, @Param('id') id: string){
    return this.clientService.updateClient(newClientName, id)
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  deleteClient(@Param('id') id: string){
    return this.clientService.deleteClient(id)
  }
}

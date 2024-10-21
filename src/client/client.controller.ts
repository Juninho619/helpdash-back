import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('/all')
  getMyclients(userId: string){
    return this.getMyclients(userId)
  }

  @Post('/create')
  createClient(clientName: string){
    return this.createClient(clientName)
  }

  @Patch('/update/:id')
  updateClient(@Body() newClientName: string, @Param('id') id: string){
    return this.updateClient(newClientName, id)
  }

  @Delete('/delete/:id')
  deleteClient(@Param('id') id: string){
    return this.deleteClient(id)
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';

@Controller('client-info')
export class ClientInfoController {
  constructor(private readonly clientInfoService: ClientInfoService) {}
  @Get('/all')
  getClientInfo(clientId: string){
    return this.clientInfoService.getClientInfo(clientId)
  }

  @Post('/create')
  fillClientInfo(@Param() clientId: string, @Body() dto: FillInfoClientDto){
    return this.clientInfoService.fillClientInfo(clientId, dto)
  }

  @Patch('/update')
  updateClientInfo(@Param() clientId: string, @Body() dto: FillInfoClientDto){
    return this.clientInfoService.updateClientInfo(clientId, dto)
  }

  @Delete('/delete')
  deleteClientInfo(@Param() id: string){
    return this.clientInfoService.deleteClientInfo(id)
  }
}

import { Module } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';
import { ClientInfoController } from './client-info.controller';

@Module({
  controllers: [ClientInfoController],
  providers: [ClientInfoService],
})
export class ClientInfoModule {}

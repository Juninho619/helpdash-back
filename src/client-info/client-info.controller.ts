import { Controller } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';

@Controller('client-info')
export class ClientInfoController {
  constructor(private readonly clientInfoService: ClientInfoService) {}
}

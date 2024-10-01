import { Injectable } from '@nestjs/common';
import { Client, ClientInfo, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';

@Injectable()
export class ClientInfoService {
    constructor(private prisma: PrismaService) {}


    async getClientInfo(client: Client){
        return this.prisma.clientInfo.findMany({
            where:{
                clientId: client.id
            }
        })
    }

    async fillClientInfo(clientId: string, dto: FillInfoClientDto){
        return this.prisma.clientInfo.create({
            data:{
                clientId: clientId,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN,
                emailAddress: dto.emailAddress 
            }
        })
    }
}

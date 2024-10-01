import { ForbiddenException, Injectable } from '@nestjs/common';
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

    async updateClientInfo(clientId: string, dto: FillInfoClientDto){
        const existingClientId = await this.prisma.clientInfo.findFirst({
            where:{
                clientId: clientId
            }
        })

        if (!existingClientId){
            throw new ForbiddenException('client info does not exist')
        }

        return this.prisma.clientInfo.update({
            where:{
                clientId: clientId
            },
            data:{
                address: dto.address,
                city: dto.address,
                country: dto.country,
                IBAN: dto.IBAN,
                emailAddress: dto.emailAddress
            }
        })
    }

    async deleteClientInfo(id: string){
        const existingClientInfoId = await this.prisma.clientInfo.findFirst({
            where:{
                id: id
            }
        })

        if (!existingClientInfoId){
            throw new ForbiddenException('Client info does not exist')
        }

        return this.prisma.clientInfo.delete({
            where:{
                id: id
            }
        })
    }
}

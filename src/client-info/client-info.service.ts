import { ForbiddenException, Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';
import { UpdateInfoClientDto } from './dto/update.info.client.dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Injectable()
export class ClientInfoService {
    constructor(private prisma: PrismaService) {}


    async getClientInfo(clientId: string){
        return this.prisma.clientInfo.findMany({
            where:{
                clientId: clientId
            },
            select:{
                clientId: true,
                address: true,
                city: true,
                country: true,
                IBAN: true,
                emailAddress: true
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

    async updateClientInfo(clientId: string, dto: UpdateInfoClientDto){
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
                city: dto.city,
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

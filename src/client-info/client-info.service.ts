import { Injectable } from '@nestjs/common';
import { Client, ClientInfo, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

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

    async fillClientInfo(){
        
    }
}

import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClientService {
    constructor(private prisma: PrismaService) {}

    async getMyclients(userId: string){
        return this.prisma.client.findMany({
            where:{
                userId: userId
            },
            orderBy:{
                name:'asc'
            },
            select:{
                name: true
            }
        })
    }

    async createClient(clientName: string){
        return this.prisma.client.create({
            data:{
                name: clientName
            }
        })
    }

    async updateClient(newClientName: string, clientId: string){
        const existingClient = await this.prisma.client.findFirst({
            where:{
                id: clientId
            }

        }
        )

        if (!existingClient){
            throw new ForbiddenException('no client with this id')
        }

        return this.prisma.client.update({
            where:{
                id: clientId
            },
            data:{
                name: newClientName
            }
        })
    }

    async deleteClient(clientId: string){
        const existingClient = await this.prisma.client.findFirst({
            where:{
                id: clientId
            }

        }
        )

        if (!existingClient){
            throw new ForbiddenException('no client with this id')
        }

        return this.prisma.client.delete({
            where:{
                id: clientId
            }
        })
        

    }
}

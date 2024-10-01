import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';

@Injectable()
export class InvoiceService {
    constructor(private prisma: PrismaService) {}
    
    async getAllInvoices(){
        return this.prisma.invoice.findMany({
            orderBy:{
                creationDate: 'asc'
            },
            select:{
                id: true,
                clientId: true,
                userId: true,
                serviceDescription: true,
                startedAt: true,
                endDate: true,
                creationDate: true
            }

        })
    }

    async createInvoice(dto: CreateInvoicedto, user: User, client: Client){
        return this.prisma.invoice.create({
            data: {
                serviceDescription: dto.serviceDescription,
                startedAt: dto.startedAt,
                endDate: dto.endDate,
                userId: user.id,
                clientId: client.id
            }
        })

    }

    async updateInvoice(id: string, dto: UpdateInvoiceDto){
        const existingInvoice = await this.prisma.invoice.findFirst({
            where:{
                id: id
            }
        })

        if (!existingInvoice){
            throw new ForbiddenException('Invoice does not exist')
        }

        return this.prisma.invoice.update({
            where:{
                id: id
            },
            data:{
                ...dto
            }
    })   
    }

    async deleteInvoice(id: string){
        const existingInvoice = await this.prisma.invoice.findUnique({
            where: {
                id: id
            }
        })

        if (!existingInvoice){
            throw new ForbiddenException('No id or invoice')
        } else{
            return this.prisma.invoice.delete({
                where:{
                    id: id
                }
            })
        }
    }
    
}

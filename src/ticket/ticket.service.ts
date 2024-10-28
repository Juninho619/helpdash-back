import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { checkUserHasAccount } from 'src/utils/checkUser';
import { UpdateTicketDto } from './dto';

@Injectable()
export class TicketService {
    constructor(private prisma: PrismaService) {}
    
    async getAllTickets(){
        return this.prisma.ticket.findMany({
          orderBy:{
            order: 'asc'
          },
          select: {
            id: true,
            userId: true,
            problemDescription: true,
            order: true
          }
        })
      }

    async getMyTickets(userId: string){
        await checkUserHasAccount(userId)
        const existingTicket = await this.prisma.ticket.findFirst({
            where:{
                userId: userId
            }
        })

        if (!existingTicket){
            throw new ForbiddenException('User does not have ticket')
        }

        return this.prisma.ticket.findMany({
            where:{
                userId: userId
            },
            select:{
                order: true,
                title: true,
                problemDescription: true
            }
        })
    
        
    }

    async createTicket(dto: InsertTicketDto, userId: string){
        await checkUserHasAccount(userId)
        try{
            const request =   await this.prisma.ticket.create({
                data: {
                    problemDescription: dto.problemDescription,
                    title: dto.title,
                    userId: userId,
                    }
                })
            console.log(request);
        }catch(error){
            console.error('Error creating ticket:', error);
            throw new InternalServerErrorException('');
        }
}

    async updateTicket(id: string, dto: UpdateTicketDto, userId: string){
        await checkUserHasAccount(userId)
        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            },
        });

        if (!existingTicket){
            throw new ForbiddenException('Unexisting id or ticket');
        }

        return await this.prisma.ticket.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
              },
            });
        
          }

    async deleteTicket(id: string, userId: string){
        await checkUserHasAccount(userId)

        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            }
        })

        if (!existingTicket || !existingTicket.id){
            throw new ForbiddenException("Id doesn't exist");
        } else {
            const ticketDeletion = await this.prisma.ticket.delete({
                where:{
                    id: id
                }

            })
            return ticketDeletion

        }

        }

    }

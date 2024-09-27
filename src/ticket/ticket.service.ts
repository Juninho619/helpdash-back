import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';

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

    async createTicket(dto: InsertTicketDto, user: User){
        return this.prisma.ticket.create({
            data: {
                problemDescription: dto.problemDescription,
                userId: user.id,
            }
        })
    }

    async updateTicket(id: string, dto: InsertTicketDto){
        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            },
        });

        if (!existingTicket){
            throw new ForbiddenException('Unexisting id or ticket');
        }

        return this.prisma.ticket.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
              },
            });
          }

    async deleteTicket(id: string){
        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            }
        })

        if (!existingTicket || !existingTicket.id){
            throw new ForbiddenException("Id doesn't exist");
        } else {
            return this.prisma.ticket.delete({
                where:{
                    id: id
                }
            })

        }

        }

    }

import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
export declare class TicketService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTickets(): Promise<{
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }[]>;
    getMyTickets(userId: string): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }[]>;
    createTicket(dto: InsertTicketDto, user: User): Promise<{
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }>;
    updateTicket(id: string, dto: InsertTicketDto): Promise<{
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }>;
    deleteTicket(id: string): Promise<{
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }>;
}

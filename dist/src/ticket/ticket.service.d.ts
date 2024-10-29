import { PrismaService } from 'prisma/prisma.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { UpdateTicketDto } from './dto';
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
        title: string;
        order: number;
        problemDescription: string;
    }[]>;
    createTicket(dto: InsertTicketDto, userId: string): Promise<void>;
    updateTicket(id: string, dto: UpdateTicketDto, userId: string): Promise<{
        title: string;
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }>;
    deleteTicket(id: string, userId: string): Promise<{
        title: string;
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }>;
}

import { TicketService } from './ticket.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { User } from '@prisma/client';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
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
    insertTicket(dto: InsertTicketDto, user: User): Promise<{
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

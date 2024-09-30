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

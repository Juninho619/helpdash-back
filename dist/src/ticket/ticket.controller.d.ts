import { TicketService } from './ticket.service';
import { InsertTicketDto } from './dto/insert.ticket.dto';
import { User } from '@prisma/client';
import { UpdateTicketDto } from './dto/update.ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    getAllTickets(): Promise<{
        id: string;
        order: number;
        problemDescription: string;
        userId: string;
    }[]>;
    getMyTickets(user: User): Promise<{
        order: number;
        title: string;
        problemDescription: string;
    }[]>;
    createTicket(dto: InsertTicketDto, user: User): Promise<{
        id: string;
        order: number;
        title: string;
        problemDescription: string;
        userId: string;
    }>;
    updateTicket(dto: UpdateTicketDto, ticketId: string, user: User): Promise<{
        id: string;
        order: number;
        title: string;
        problemDescription: string;
        userId: string;
    }>;
    deleteTicket(id: string, user: User): Promise<{
        id: string;
        order: number;
        title: string;
        problemDescription: string;
        userId: string;
    }>;
}

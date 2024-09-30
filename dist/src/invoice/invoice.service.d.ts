import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
export declare class InvoiceService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllInvoices(): Promise<{
        id: number;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }[]>;
    createInvoice(dto: CreateInvoicedto, user: User, client: Client): Promise<{
        id: number;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
    updateInvoice(id: number, dto: CreateInvoicedto): Promise<{
        id: number;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
    deleteInvoice(id: number): Promise<{
        id: number;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
}

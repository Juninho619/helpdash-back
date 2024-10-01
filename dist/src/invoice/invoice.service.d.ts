import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';
export declare class InvoiceService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllInvoices(): Promise<{
        id: number;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }[]>;
    createInvoice(dto: CreateInvoicedto, user: User, client: Client): Promise<{
        id: number;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
    updateInvoice(dto: UpdateInvoiceDto, id: string): Promise<{
        id: number;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
    deleteInvoice(id: number): Promise<{
        id: number;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
}

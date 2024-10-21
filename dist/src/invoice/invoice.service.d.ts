import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';
export declare class InvoiceService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllInvoices(): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }[]>;
    getMyInvoices(userId: string): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }[]>;
    createInvoice(dto: CreateInvoicedto, user: User, client: Client): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
    updateInvoice(id: string, dto: UpdateInvoiceDto): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
    deleteInvoice(id: string): Promise<{
        id: string;
        userId: string;
        clientId: string;
        serviceDescription: string;
        startedAt: Date;
        endDate: Date;
        creationDate: Date;
    }>;
}

import { InvoiceService } from './invoice.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    getAllInvoices(): () => Promise<{
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
    updateInvoice(dto: CreateInvoicedto, user: User): Promise<{
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

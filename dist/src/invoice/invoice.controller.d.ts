import { InvoiceService } from './invoice.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    getAllInvoices(): () => Promise<{
        id: string;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }[]>;
    createInvoice(dto: CreateInvoicedto, user: User, client: Client): Promise<{
        id: string;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
    updateInvoice(id: string, dto: UpdateInvoiceDto): Promise<{
        id: string;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
    deleteInvoice(id: string): Promise<{
        id: string;
        userId: string;
        startedAt: Date;
        endDate: Date;
        clientId: string;
        serviceDescription: string;
        creationDate: Date;
    }>;
}

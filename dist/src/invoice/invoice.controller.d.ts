import { InvoiceService } from './invoice.service';
import { CreateInvoicedto } from './dto/create.invoice.dto';
import { Client, User } from '@prisma/client';
import { UpdateInvoiceDto } from './dto/update.invoice.dto';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    getAllInvoices(): () => Promise<{
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
    updateInvoice(dto: UpdateInvoiceDto, user: User): Promise<{
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

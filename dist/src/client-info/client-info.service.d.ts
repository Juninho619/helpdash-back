import { PrismaService } from 'prisma/prisma.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';
import { UpdateInfoClientDto } from './dto/update.info.client.dto';
export declare class ClientInfoService {
    private prisma;
    constructor(prisma: PrismaService);
    getClientInfo(clientId: string): Promise<{
        id: string;
        clientId: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
    }[]>;
    fillClientInfo(clientId: string, dto: FillInfoClientDto): Promise<{
        id: string;
        clientId: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
    }>;
    updateClientInfo(clientId: string, dto: UpdateInfoClientDto): Promise<{
        id: string;
        clientId: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
    }>;
    deleteClientInfo(id: string): Promise<{
        id: string;
        clientId: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
    }>;
}

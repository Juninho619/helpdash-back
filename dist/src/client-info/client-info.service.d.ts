import { PrismaService } from 'prisma/prisma.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';
import { UpdateInfoClientDto } from './dto/update.info.client.dto';
export declare class ClientInfoService {
    private prisma;
    constructor(prisma: PrismaService);
    getClientInfo(clientId: string): Promise<{
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
        clientId: string;
    }[]>;
    fillClientInfo(clientId: string, dto: FillInfoClientDto): Promise<{
        id: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
        clientId: string;
    }>;
    updateClientInfo(clientId: string, dto: UpdateInfoClientDto): Promise<{
        id: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
        clientId: string;
    }>;
    deleteClientInfo(id: string): Promise<{
        id: string;
        IBAN: string;
        address: string;
        city: string;
        country: string;
        emailAddress: string;
        clientId: string;
    }>;
}

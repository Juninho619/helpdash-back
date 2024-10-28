import { PrismaService } from 'prisma/prisma.service';
import { CreateClientDto } from './dto/create.client.dto';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyclients(userId: string): Promise<{
        name: string;
    }[]>;
    createClient(dto: CreateClientDto, userId: string): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
    updateClient(newClientName: string, clientId: string): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
    deleteClient(clientId: string): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
}

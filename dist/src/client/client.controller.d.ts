import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create.client.dto';
import { User } from '@prisma/client';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getMyclients(userId: string): Promise<{
        name: string;
    }[]>;
    createClient(dto: CreateClientDto, user: User): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
    updateClient(newClientName: string, id: string): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
    deleteClient(id: string): Promise<{
        name: string;
        id: string;
        userId: string;
    }>;
}

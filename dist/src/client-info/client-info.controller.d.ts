import { ClientInfoService } from './client-info.service';
import { FillInfoClientDto } from './dto/fill.info.client.dto';
import { UpdateInfoClientDto } from './dto/update.info.client.dto';
export declare class ClientInfoController {
    private readonly clientInfoService;
    constructor(clientInfoService: ClientInfoService);
    getClientInfo(clientId: string): Promise<{
        id: string;
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

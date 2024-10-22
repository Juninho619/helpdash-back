import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getMyclients(userId: string): any;
    createClient(clientName: string): any;
    updateClient(newClientName: string, id: string): any;
    deleteClient(id: string): any;
}

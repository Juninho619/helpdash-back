"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ClientService = class ClientService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMyclients(userId) {
        return this.prisma.client.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                name: true
            }
        });
    }
    async createClient(clientName) {
        return this.prisma.client.create({
            data: {
                name: clientName
            }
        });
    }
    async updateClient(newClientName, clientId) {
        const existingClient = await this.prisma.client.findFirst({
            where: {
                id: clientId
            }
        });
        if (!existingClient) {
            throw new common_1.ForbiddenException('no client with this id');
        }
        return this.prisma.client.update({
            where: {
                id: clientId
            },
            data: {
                name: newClientName
            }
        });
    }
    async deleteClient(clientId) {
        const existingClient = await this.prisma.client.findFirst({
            where: {
                id: clientId
            }
        });
        if (!existingClient) {
            throw new common_1.ForbiddenException('no client with this id');
        }
        return this.prisma.client.delete({
            where: {
                id: clientId
            }
        });
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientService);
//# sourceMappingURL=client.service.js.map
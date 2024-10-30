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
exports.ClientInfoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const guard_1 = require("../auth/guard");
let ClientInfoService = class ClientInfoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getClientInfo(clientId) {
        return this.prisma.clientInfo.findMany({
            where: {
                clientId: clientId
            },
            select: {
                clientId: true,
                address: true,
                city: true,
                country: true,
                IBAN: true,
                emailAddress: true
            }
        });
    }
    async fillClientInfo(clientId, dto) {
        return this.prisma.clientInfo.create({
            data: {
                clientId: clientId,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN,
                emailAddress: dto.emailAddress
            }
        });
    }
    async updateClientInfo(clientId, dto) {
        const existingClientId = await this.prisma.clientInfo.findFirst({
            where: {
                clientId: clientId
            }
        });
        if (!existingClientId) {
            throw new common_1.ForbiddenException('client info does not exist');
        }
        return this.prisma.clientInfo.update({
            where: {
                clientId: clientId
            },
            data: {
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN,
                emailAddress: dto.emailAddress
            }
        });
    }
    async deleteClientInfo(id) {
        const existingClientInfoId = await this.prisma.clientInfo.findFirst({
            where: {
                id: id
            }
        });
        if (!existingClientInfoId) {
            throw new common_1.ForbiddenException('Client info does not exist');
        }
        return this.prisma.clientInfo.delete({
            where: {
                id: id
            }
        });
    }
};
exports.ClientInfoService = ClientInfoService;
exports.ClientInfoService = ClientInfoService = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientInfoService);
//# sourceMappingURL=client-info.service.js.map
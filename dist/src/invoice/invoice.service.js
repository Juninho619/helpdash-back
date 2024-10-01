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
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let InvoiceService = class InvoiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllInvoices() {
        return this.prisma.invoice.findMany({
            orderBy: {
                creationDate: 'asc'
            },
            select: {
                id: true,
                clientId: true,
                userId: true,
                serviceDescription: true,
                startedAt: true,
                endDate: true,
                creationDate: true
            }
        });
    }
    async createInvoice(dto, user, client) {
        return this.prisma.invoice.create({
            data: {
                serviceDescription: dto.serviceDescription,
                startedAt: dto.startedAt,
                endDate: dto.endDate,
                userId: user.id,
                clientId: client.id
            }
        });
    }
    async updateInvoice(dto, id) {
        const existingTicket = await this.prisma.invoice.findUnique({
            where: {
                id: id
            }
        });
        if (!existingTicket) {
            throw new common_1.ForbiddenException('unexisting id or invoice');
        }
        return this.prisma.invoice.update({
            where: {
                id: id
            },
            data: {
                ...dto
            }
        });
    }
    async deleteInvoice(id) {
        const existingInvoice = await this.prisma.invoice.findUnique({
            where: {
                id: id
            }
        });
        if (!existingInvoice) {
            throw new common_1.ForbiddenException('No id or invoice');
        }
        else {
            return this.prisma.invoice.delete({
                where: {
                    id: id
                }
            });
        }
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InvoiceService);
//# sourceMappingURL=invoice.service.js.map
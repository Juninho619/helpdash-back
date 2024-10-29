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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const checkUser_1 = require("../utils/checkUser");
let TicketService = class TicketService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllTickets() {
        return this.prisma.ticket.findMany({
            orderBy: {
                order: 'asc'
            },
            select: {
                id: true,
                userId: true,
                problemDescription: true,
                order: true
            }
        });
    }
    async getMyTickets(userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        const existingTicket = await this.prisma.ticket.findFirst({
            where: {
                userId: userId
            }
        });
        if (!existingTicket) {
            throw new common_1.ForbiddenException('User does not have ticket');
        }
        return this.prisma.ticket.findMany({
            where: {
                userId: userId
            },
            select: {
                order: true,
                title: true,
                problemDescription: true
            }
        });
    }
    async createTicket(dto, userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        try {
            const request = await this.prisma.ticket.create({
                data: {
                    problemDescription: dto.problemDescription,
                    title: dto.title,
                    userId: userId,
                }
            });
            console.log(request);
        }
        catch (error) {
            console.error('Error creating ticket:', error);
            throw new common_1.InternalServerErrorException('');
        }
    }
    async updateTicket(id, dto, userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            },
        });
        if (!existingTicket) {
            throw new common_1.ForbiddenException('Unexisting id or ticket');
        }
        return await this.prisma.ticket.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
            },
        });
    }
    async deleteTicket(id, userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        const existingTicket = await this.prisma.ticket.findUnique({
            where: {
                id: id,
            }
        });
        if (!existingTicket || !existingTicket.id) {
            throw new common_1.ForbiddenException("Id doesn't exist");
        }
        else {
            const ticketDeletion = await this.prisma.ticket.delete({
                where: {
                    id: id
                }
            });
            return ticketDeletion;
        }
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map
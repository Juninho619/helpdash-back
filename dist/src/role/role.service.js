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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const checkUser_1 = require("../utils/checkUser");
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRolesAdmin(userId) {
        await (0, checkUser_1.checkuserIsAdmin)(userId);
        return this.prisma.role.findMany({
            orderBy: {
                name: 'asc',
            },
            select: {
                id: true,
                name: true,
            },
        });
    }
    async createRole(userId, dto) {
        await (0, checkUser_1.checkuserIsAdmin)(userId);
        const role = await this.prisma.role.create({
            data: {
                name: dto.name,
            },
        });
        return role;
    }
    async editRoleById(userId, roleId, dto) {
        await (0, checkUser_1.checkuserIsAdmin)(userId);
        const role = await this.prisma.role.findUnique({
            where: {
                id: roleId,
            },
        });
        if (!role || role.id !== roleId)
            throw new common_1.ForbiddenException('Access to resources denied');
        return this.prisma.role.update({
            where: {
                id: roleId,
            },
            data: {
                ...dto,
            },
        });
    }
    async deleteRoleById(userId, id) {
        await (0, checkUser_1.checkuserIsAdmin)(userId);
        const role = await this.prisma.role.findUnique({
            where: {
                id: id,
            },
        });
        if (!role || role.id !== id)
            throw new common_1.ForbiddenException('Access to resources denied');
        await this.prisma.role.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
//# sourceMappingURL=role.service.js.map
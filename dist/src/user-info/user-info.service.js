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
exports.UserInfoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserInfoService = class UserInfoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserInfo(userId) {
        return this.prisma.userInfo.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                userId: true,
                businessName: true,
                billingEmail: true,
                address: true,
                city: true,
                country: true,
                IBAN: true
            }
        });
    }
    async fillInfoUser(userId, dto) {
        const userExists = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!userExists) {
            throw new common_1.ForbiddenException('User does not exist');
        }
        return this.prisma.userInfo.create({
            data: {
                userId: userId,
                businessName: dto.businessname,
                billingEmail: dto.billingEmail,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN
            }
        });
    }
    async updateUserInfo(userId, dto) {
        const userExists = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!userExists) {
            throw new common_1.ForbiddenException('User does not exist');
        }
        return this.prisma.userInfo.update({
            where: {
                userId: userId
            },
            data: {
                userId: userId,
                businessName: dto.businessname,
                billingEmail: dto.billingEmail,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN
            }
        });
    }
    async deleteUserInfo(id) {
        const userInfoExists = await this.prisma.userInfo.findFirst({
            where: {
                id: id
            }
        });
        if (!userInfoExists) {
            throw new common_1.ForbiddenException('No user infor with this id');
        }
        return this.prisma.userInfo.delete({
            where: {
                id: id
            }
        });
    }
};
exports.UserInfoService = UserInfoService;
exports.UserInfoService = UserInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserInfoService);
//# sourceMappingURL=user-info.service.js.map
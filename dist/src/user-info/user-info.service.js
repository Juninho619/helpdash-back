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
const checkUser_1 = require("../utils/checkUser");
let UserInfoService = class UserInfoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserInfo(userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        try {
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
        catch (e) {
            console.log(e);
            return ({ 'error': e });
        }
    }
    async fillInfoUser(userId, dto) {
        (0, checkUser_1.checkUserHasAccount)(userId);
        const userExists = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!userExists) {
            throw new common_1.ForbiddenException('User does not exist');
        }
        try {
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
        catch (e) {
            console.log(e);
            return ({ 'error': e });
        }
    }
    async updateUserInfo(userId, dto) {
        (0, checkUser_1.checkUserHasAccount)(userId);
        const userExists = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!userExists) {
            throw new common_1.ForbiddenException('User does not exist');
        }
        try {
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
        catch (e) {
            console.log(e);
            return ({ 'error': e });
        }
    }
    async deleteUserInfo(userId) {
        await (0, checkUser_1.checkUserHasAccount)(userId);
        const userInfoExists = await this.prisma.userInfo.findFirst({
            where: {
                id: userId
            }
        });
        if (!userInfoExists) {
            throw new common_1.ForbiddenException('No user info with this id');
        }
        try {
            return this.prisma.userInfo.delete({
                where: {
                    id: userId
                }
            });
        }
        catch (e) {
            console.log(e);
            return ({ 'error': e });
        }
    }
};
exports.UserInfoService = UserInfoService;
exports.UserInfoService = UserInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserInfoService);
//# sourceMappingURL=user-info.service.js.map
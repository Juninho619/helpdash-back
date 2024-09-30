"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleLevel = checkRoleLevel;
exports.checkUserHasAccount = checkUserHasAccount;
exports.checkuserIsAdmin = checkuserIsAdmin;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const const_1 = require("./const/const");
const prisma = new client_1.PrismaClient();
async function checkRoleLevel(userId, level) {
    if (!userId || !level) {
        throw new common_1.ForbiddenException('Access to resources denied');
    }
    checkRoleExist(level);
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (user && user.role) {
        const role = await prisma.role.findFirst({
            where: {
                id: user.role,
            },
        });
        if (role && role.id) {
            checkRoleExist(role.name);
            if (level === const_1.Roles.ADMIN && role.name !== const_1.Roles.ADMIN) {
                throw new common_1.ForbiddenException('Access to resources denied');
            }
        }
        else {
            throw new common_1.ForbiddenException('Access to resources denied');
        }
    }
    else {
        throw new common_1.ForbiddenException('Access to resources denied');
    }
}
function checkRoleExist(role) {
    switch (role) {
        case const_1.Roles.ADMIN:
        case const_1.Roles.USER:
            break;
        default:
            throw new common_1.ForbiddenException('Access to resources denied');
    }
}
async function checkUserHasAccount(jwtId) {
    if (jwtId) {
        const user = await prisma.user.findUnique({
            where: {
                id: jwtId,
                isActive: true,
            },
        });
        if (!user || !user.id) {
            throw new common_1.ForbiddenException('Access to resources denied');
        }
    }
    else {
        throw new common_1.ForbiddenException('Access to resources denied');
    }
}
async function checkuserIsAdmin(jwtId) {
    if (jwtId) {
        const user = await prisma.user.findUnique({
            where: {
                id: jwtId,
                isActive: true,
            },
            include: {
                roleModel: true,
            },
        });
        if (!user || !user.id) {
            throw new common_1.ForbiddenException('Access to resources denied2');
        }
        if (user.roleModel.name !== const_1.Roles.ADMIN) {
            throw new common_1.ForbiddenException('Access to resources denied3');
        }
    }
    else {
        throw new common_1.ForbiddenException('Access to resources denied4');
    }
}
//# sourceMappingURL=checkUser.js.map
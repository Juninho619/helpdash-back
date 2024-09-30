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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const dto_1 = require("./dto");
const role_service_1 = require("./role.service");
const swagger_1 = require("@nestjs/swagger");
const guard_1 = require("../auth/guard");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    getAllRoles(user) {
        return this.roleService.getRolesAdmin(user.id);
    }
    createRole(dto, user) {
        return this.roleService.createRole(user.id, dto);
    }
    editRoleById(roleId, dto, user) {
        return this.roleService.editRoleById(user.id, roleId, dto);
    }
    deleteRoleById(roleId, user) {
        return this.roleService.deleteRoleById(user.id, roleId);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getAllRoles", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RoleDto, Object]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.RoleDto, Object]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "editRoleById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "deleteRoleById", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, swagger_1.ApiTags)('role'),
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map
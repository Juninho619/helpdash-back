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
exports.UserInfoController = void 0;
const common_1 = require("@nestjs/common");
const user_info_service_1 = require("./user-info.service");
const dto_1 = require("./dto");
let UserInfoController = class UserInfoController {
    constructor(userInfoService) {
        this.userInfoService = userInfoService;
    }
    getUserInfo(userId) {
        return this.userInfoService.getUserInfo(userId);
    }
    createUserinfo(userId, dto) {
        return this.userInfoService.fillInfoUser(userId, dto);
    }
    updateUserInfo(userId, dto) {
        return this.userInfoService.updateUserInfo(userId, dto);
    }
    deleteUserInfo(id) {
        return this.userInfoService.deleteUserInfo(id);
    }
};
exports.UserInfoController = UserInfoController;
__decorate([
    (0, common_1.Get)('/all/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Post)('/create/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.InsertUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "createUserinfo", null);
__decorate([
    (0, common_1.Patch)('/update/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.InsertUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "updateUserInfo", null);
__decorate([
    (0, common_1.Delete)('/delete/:userId'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "deleteUserInfo", null);
exports.UserInfoController = UserInfoController = __decorate([
    (0, common_1.Controller)('user-info'),
    __metadata("design:paramtypes", [user_info_service_1.UserInfoService])
], UserInfoController);
//# sourceMappingURL=user-info.controller.js.map
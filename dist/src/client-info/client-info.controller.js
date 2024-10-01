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
exports.ClientInfoController = void 0;
const common_1 = require("@nestjs/common");
const client_info_service_1 = require("./client-info.service");
const fill_info_client_dto_1 = require("./dto/fill.info.client.dto");
const update_info_client_dto_1 = require("./dto/update.info.client.dto");
let ClientInfoController = class ClientInfoController {
    constructor(clientInfoService) {
        this.clientInfoService = clientInfoService;
    }
    getClientInfo(clientId) {
        return this.clientInfoService.getClientInfo(clientId);
    }
    fillClientInfo(clientId, dto) {
        return this.clientInfoService.fillClientInfo(clientId, dto);
    }
    updateClientInfo(clientId, dto) {
        return this.clientInfoService.updateClientInfo(clientId, dto);
    }
    deleteClientInfo(id) {
        return this.clientInfoService.deleteClientInfo(id);
    }
};
exports.ClientInfoController = ClientInfoController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientInfoController.prototype, "getClientInfo", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fill_info_client_dto_1.FillInfoClientDto]),
    __metadata("design:returntype", void 0)
], ClientInfoController.prototype, "fillClientInfo", null);
__decorate([
    (0, common_1.Patch)('/update'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_info_client_dto_1.UpdateInfoClientDto]),
    __metadata("design:returntype", void 0)
], ClientInfoController.prototype, "updateClientInfo", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientInfoController.prototype, "deleteClientInfo", null);
exports.ClientInfoController = ClientInfoController = __decorate([
    (0, common_1.Controller)('client-info'),
    __metadata("design:paramtypes", [client_info_service_1.ClientInfoService])
], ClientInfoController);
//# sourceMappingURL=client-info.controller.js.map
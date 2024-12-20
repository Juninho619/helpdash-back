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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const insert_ticket_dto_1 = require("./dto/insert.ticket.dto");
const update_ticket_dto_1 = require("./dto/update.ticket.dto");
const auth_1 = require("../auth");
const guard_1 = require("../auth/guard");
let TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    getAllTickets() {
        return this.ticketService.getAllTickets();
    }
    getMyTickets(user) {
        return this.ticketService.getMyTickets(user.id);
    }
    createTicket(dto, user) {
        return this.ticketService.createTicket(dto, user.id);
    }
    updateTicket(dto, ticketId, user) {
        return this.ticketService.updateTicket(ticketId, dto, user.id);
    }
    deleteTicket(id, user) {
        return this.ticketService.deleteTicket(id, user.id);
    }
};
exports.TicketController = TicketController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketController.prototype, "getAllTickets", null);
__decorate([
    (0, common_1.Get)('/my'),
    __param(0, (0, auth_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TicketController.prototype, "getMyTickets", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_ticket_dto_1.InsertTicketDto, Object]),
    __metadata("design:returntype", void 0)
], TicketController.prototype, "createTicket", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, auth_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ticket_dto_1.UpdateTicketDto, String, Object]),
    __metadata("design:returntype", void 0)
], TicketController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, auth_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TicketController.prototype, "deleteTicket", null);
exports.TicketController = TicketController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('ticket'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
//# sourceMappingURL=ticket.controller.js.map
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const answers_service_1 = require("./answers.service");
const global_error_1 = require("../common/DTOs/error/global.error");
let AnswersController = class AnswersController {
    constructor(service) {
        this.service = service;
    }
    findAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res
                    .status(common_1.HttpStatus.OK)
                    .send(yield this.service.findAll());
            }
            catch (err) {
                let msg = err.message;
                let status = common_1.HttpStatus.BAD_GATEWAY;
                let result = new global_error_1.GlobalError(msg, status);
                res
                    .status(common_1.HttpStatus.BAD_GATEWAY)
                    .send(result);
            }
        });
    }
    findOne(letter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res
                    .status(common_1.HttpStatus.OK)
                    .send(yield this.service.findOne(letter));
            }
            catch (err) {
                let msg = err.message;
                let status = common_1.HttpStatus.BAD_GATEWAY;
                let result = new global_error_1.GlobalError(msg, status);
                res
                    .status(common_1.HttpStatus.BAD_GATEWAY)
                    .send(result);
            }
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:letra'),
    __param(0, common_1.Param('letra')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "findOne", null);
AnswersController = __decorate([
    common_1.Controller('/resposta'),
    __metadata("design:paramtypes", [answers_service_1.AnswersService])
], AnswersController);
exports.AnswersController = AnswersController;
//# sourceMappingURL=answers.controller.js.map
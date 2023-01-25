"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersFromGithubController = void 0;
const axios_1 = __importDefault(require("axios"));
const AppError_1 = require("../../errors/AppError");
class ListUsersFromGithubController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const since = req.query.since;
                const { data, headers } = yield axios_1.default.get(`https://api.github.com/users?since=${since}`);
                const linkNextPage = headers.link;
                return res.json({ users: data, linkNextPage });
            }
            catch (err) {
                throw new AppError_1.AppError("Internal Server Error", 500);
            }
        });
    }
}
exports.ListUsersFromGithubController = ListUsersFromGithubController;

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
const axios_1 = __importDefault(require("axios"));
const AppError_1 = require("../src/errors/AppError");
const List_Users_From_Github_controller_1 = require("../src/modules/users/List-Users-From-Github-controller");
describe("ListUsersGithubController", () => {
    let controller;
    let req;
    let res;
    let axiosGetSpy;
    beforeEach(() => {
        controller = new List_Users_From_Github_controller_1.ListUsersFromGithubController();
        req = { query: { since: 0 } };
        res = { json: jest.fn() };
        axiosGetSpy = jest.spyOn(axios_1.default, "get");
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("should return list of users from Github API", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = [
            { id: 1, name: "User 1" },
            { id: 2, name: "User 2" },
        ];
        const headers = { link: "https://api.github.com/users?since=100" };
        axiosGetSpy.mockResolvedValue({ data: users, headers });
        yield controller.handle(req, res);
        expect(axios_1.default.get).toHaveBeenCalledWith(`https://api.github.com/users?since=${req.query.since}`);
        expect(res.json).toHaveBeenCalledWith({
            users,
            linkNextPage: headers.link,
        });
    }));
    it("should throw AppError when an error occurs", () => __awaiter(void 0, void 0, void 0, function* () {
        axiosGetSpy.mockRejectedValue(new Error());
        yield expect(controller.handle(req, res)).rejects.toThrow(AppError_1.AppError);
        expect(res.json).not.toHaveBeenCalled();
    }));
});

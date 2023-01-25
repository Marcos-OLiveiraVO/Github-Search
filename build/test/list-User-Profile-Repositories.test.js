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
const List_User_Profile_Repositories_Controller_1 = require("../src/modules/users/List-User-Profile-Repositories-Controller");
describe("ListUserProfileRepositoriesController", () => {
    let controller;
    let req;
    let res;
    let next;
    let axiosGetSpy;
    beforeEach(() => {
        controller = new List_User_Profile_Repositories_Controller_1.ListUserProfileRepositoriesController();
        req = { params: { username: "test-user" } };
        res = { json: jest.fn() };
        next = jest.fn();
        axiosGetSpy = jest.spyOn(axios_1.default, "get");
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("should return user repositories", () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedResponse = {
            data: [
                { id: 1, name: "repo1" },
                { id: 2, name: "repo2" },
            ],
        };
        axiosGetSpy.mockResolvedValue(expectedResponse);
        yield controller.handle(req, res, next);
        expect(axiosGetSpy).toHaveBeenCalledWith(`https://api.github.com/users/${req.params.username}/repos`);
        expect(res.json).toHaveBeenCalledWith({ user: expectedResponse.data });
    }));
    it("should throw error when user not exists", () => __awaiter(void 0, void 0, void 0, function* () {
        axiosGetSpy.mockRejectedValue(new Error());
        yield controller.handle(req, res, next);
        expect(next).toHaveBeenCalledWith(new AppError_1.AppError("User or Repository not exists!", 404));
    }));
});

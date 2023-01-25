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
const List_User_Profile_Controller_1 = require("../src/modules/users/List-User-Profile-Controller");
const AppError_1 = require("../src/errors/AppError");
describe("ListUserProfileController", () => {
    let listUserProfileController;
    let req;
    let res;
    beforeEach(() => {
        listUserProfileController = new List_User_Profile_Controller_1.ListUserProfileController();
        req = { params: { username: "example" } };
        res = { json: jest.fn() };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should return the user profile data", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            id: 1,
            name: "Example User",
            login: "example",
        };
        jest.spyOn(axios_1.default, "get").mockResolvedValueOnce({ data: user });
        yield listUserProfileController.handle(req, res);
        expect(res.json).toHaveBeenCalledWith({ user });
    }));
    it("should throw AppError if user does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(axios_1.default, "get").mockRejectedValueOnce(new Error());
        yield expect(listUserProfileController.handle(req, res)).rejects.toThrowError(AppError_1.AppError);
        expect(res.json).not.toHaveBeenCalled();
    }));
});

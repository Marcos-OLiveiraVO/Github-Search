import axios from "axios";
import { Request, Response } from "express";
import { ListUserProfileController } from "../src/modules/users/List-User-Profile-Controller";
import { AppError } from "../src/errors/AppError";

describe("ListUserProfileController", () => {
  let listUserProfileController: ListUserProfileController;
  let req: any;
  let res: any;

  beforeEach(() => {
    listUserProfileController = new ListUserProfileController();
    req = { params: { username: "example" } };
    res = { json: jest.fn() };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the user profile data", async () => {
    const user = {
      id: 1,
      name: "Example User",
      login: "example",
    };
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: user });

    await listUserProfileController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith({ user });
  });

  it("should throw AppError if user does not exist", async () => {
    jest.spyOn(axios, "get").mockRejectedValueOnce(new Error());

    await expect(
      listUserProfileController.handle(req, res)
    ).rejects.toThrowError(AppError);
    expect(res.json).not.toHaveBeenCalled();
  });
});

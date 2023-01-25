import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../src/errors/AppError";
import { ListUserProfileRepositoriesController } from "../src/modules/users/List-User-Profile-Repositories-Controller";

describe("ListUserProfileRepositoriesController", () => {
  let controller: ListUserProfileRepositoriesController;
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let axiosGetSpy: jest.SpyInstance;

  beforeEach(() => {
    controller = new ListUserProfileRepositoriesController();
    req = { params: { username: "test-user" } } as any;
    res = { json: jest.fn() } as any;
    next = jest.fn();
    axiosGetSpy = jest.spyOn(axios, "get");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return user repositories", async () => {
    const expectedResponse = {
      data: [
        { id: 1, name: "repo1" },
        { id: 2, name: "repo2" },
      ],
    };
    axiosGetSpy.mockResolvedValue(expectedResponse);

    await controller.handle(req, res, next);

    expect(axiosGetSpy).toHaveBeenCalledWith(
      `https://api.github.com/users/${req.params.username}/repos`
    );
    expect(res.json).toHaveBeenCalledWith({ user: expectedResponse.data });
  });

  it("should throw error when user not exists", async () => {
    axiosGetSpy.mockRejectedValue(new Error());

    await controller.handle(req, res, next);

    expect(next).toHaveBeenCalledWith(
      new AppError("User or Repository not exists!", 404)
    );
  });
});

import axios from "axios";
import { Request, Response } from "express";
import { AppError } from "../src/errors/AppError";
import { ListUsersFromGithubController } from "../src/modules/users/List-Users-From-Github-controller";

describe("ListUsersGithubController", () => {
  let controller: ListUsersFromGithubController;
  let req: Request;
  let res: Response;
  let axiosGetSpy: jest.SpyInstance;

  beforeEach(() => {
    controller = new ListUsersFromGithubController();
    req = { query: { since: 0 } } as any;
    res = { json: jest.fn() } as any;
    axiosGetSpy = jest.spyOn(axios, "get");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return list of users from Github API", async () => {
    const users = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];

    const headers = { link: "https://api.github.com/users?since=100" };

    axiosGetSpy.mockResolvedValue({ data: users, headers });

    await controller.handle(req, res);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users?since=${req.query.since}`
    );

    expect(res.json).toHaveBeenCalledWith({
      users,
      linkNextPage: headers.link,
    });
  });

  it("should throw AppError when an error occurs", async () => {
    axiosGetSpy.mockRejectedValue(new Error());

    await expect(controller.handle(req, res)).rejects.toThrow(AppError);
    expect(res.json).not.toHaveBeenCalled();
  });
});

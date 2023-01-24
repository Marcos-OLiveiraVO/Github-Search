import axios from "axios";
import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

class ListUsersGithubController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const since = req.query.since;
      const { data, headers } = await axios.get(
        `https://api.github.com/users?since=${since}`
      );
      const linkNextPage = headers.link;
      return res.json({ users: data, linkNextPage });
    } catch (err) {
      throw new AppError("Internal Server Error", 500);
    }
  }
}

export { ListUsersGithubController };

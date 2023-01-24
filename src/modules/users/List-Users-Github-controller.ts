import axios from "axios";
import { Request, Response } from "express";

class ListUsersGithubController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const number = req.query.id;
      const { data } = await axios.get(
        `https://api.github.com/users?since=${number}`
      );
      return res.json({ users: data });
    } catch (err) {
      return res.status(404).send({ err: err.message });
    }
  }
}

export { ListUsersGithubController };

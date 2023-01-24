import axios from "axios";
import { Request, Response } from "express";

class ListUserProfileRepositoriesController {
  async handle(req: Request, res: Response) {
    try {
      const user = req.params.user;
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      return res.json({ user: data });
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  }
}

export { ListUserProfileRepositoriesController };

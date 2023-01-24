import axios from "axios";
import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

class ListUserProfileRepositoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const username = req.params.username;
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return res.json({ user: data });
    } catch (err) {
      throw new AppError("User or Repository not exists!", 404);
    }
  }
}

export { ListUserProfileRepositoriesController };

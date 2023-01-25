import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

class ListUserProfileRepositoriesController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const username = req.params.username;
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      res.json({ user: data });
    } catch (err) {
      next(new AppError("User or Repository not exists!", 404));
    }
  }
}

export { ListUserProfileRepositoriesController };

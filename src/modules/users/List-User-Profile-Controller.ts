import axios from "axios";
import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

class ListUserProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const username = req.params.username;
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return res.json({ user: data });
    } catch (err) {
      throw new AppError("User not exists!", 404);
    }
  }
}

export { ListUserProfileController };

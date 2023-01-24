import axios from "axios";
import { Request, Response } from "express";

class ListUserProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.params.user;
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return res.json({ users: data });
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  }
}

export { ListUserProfileController };

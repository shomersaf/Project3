
import express, { Request, Response, NextFunction } from "express"
import {getFollowingHandler } from "./handlers/getFollowingHandler";

const followingRouter = express.Router();

followingRouter.get("/",getFollowing)



async function getFollowing(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getFollowingHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

    export { followingRouter };


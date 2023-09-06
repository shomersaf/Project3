
import express, { Request, Response, NextFunction } from "express"
import {getUsersHandler } from "./handlers/getUsersHandler";

const usersRouter = express.Router();

usersRouter.get("/",getUsers)



async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getUsersHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

    export { usersRouter };


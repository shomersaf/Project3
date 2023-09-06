
import express, { Request, Response, NextFunction } from "express"
import {getVacationsHandler } from "./handlers/getVacationsHandler";

const vacationsRouter = express.Router();

vacationsRouter.get("/",getVacations)



async function getVacations(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getVacationsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

    export { vacationsRouter };


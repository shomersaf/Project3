
import express, { Request, Response, NextFunction } from "express"
import {getVacationsHandler } from "./handlers/getVacationsHandler";
import {postVacationHandler } from "./handlers/postVacationHandler";
import {putVacationHandler } from "./handlers/putVacationHandler";
import {deleteVacationHandler } from "./handlers/deleteVacationHandler";

const vacationsRouter = express.Router();

vacationsRouter.get("/",getVacations)
vacationsRouter.post("/new",postVacation)
vacationsRouter.put("/edit",putVacation)
vacationsRouter.delete("/delete",deleteVacation)

async function deleteVacation(req: Request, res: Response, next: NextFunction) {
  try {
    const { vcnId } = req.body;
    if (!vcnId) throw new Error('vacation id is absent');
    const result = await deleteVacationHandler(vcnId);
      if(result)console.log('vacation deleted')
    res.json(result)
  } catch (error) {
    res.status(500).send({
      message: error
  });
    return next(error);
  }
}


async function putVacation(req: Request, res: Response, next: NextFunction) {
  try {
    const {vcnId, destination, about, fromDate, toDate, price, imageSrc } = req.body;
    if (!destination || !about || !fromDate || !toDate || !price ) throw new Error('Some data not entered');
    const result = await putVacationHandler(vcnId,destination, about, fromDate, toDate, price, imageSrc );
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}


async function postVacation(req: Request, res: Response, next: NextFunction) {
  try {
    const { destination, about, fromDate, toDate, price, imageSrc } = req.body;
    if (!destination || !about || !fromDate || !toDate || !price || !imageSrc  ) throw new Error('Some data not entered');
    if (isNaN(price)) throw new Error("price should be a number");
    const result = await postVacationHandler(destination, about, fromDate, toDate, price, imageSrc );
      if(result) console.log('vacation added')
    res.json(result)
  } catch (error) {
    res.status(500).send({
      message: error
  });
    return next(error);
  }
}


async function getVacations(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = req.body;
    const result = await getVacationsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

    export { vacationsRouter };



import express, { Request, Response, NextFunction } from "express"
import {getFollowingsByUserHandler} from "./handlers/getFollowingsByUserHandler";
import {getFollowingsByVacation} from "./handlers/getFollowingsByVacation";
import {postFollowingHandler } from "./handlers/postFollowingHandler";
import {deleteFollowingHandler } from "./handlers/deleteFollowingHandler";

const followingRouter = express.Router();

followingRouter.get("/by_user",getFollowingByUser)
followingRouter.get("/by_vacation",getFollowingByVacation)
followingRouter.post("/new",postFollowing)
followingRouter.delete("/delete",deleteFollowing)



async function deleteFollowing(req: Request, res: Response, next: NextFunction) {
  try {
    const {userId, vcnId } = req.body;
    const result = await deleteFollowingHandler(userId, vcnId);
      if(result)console.log('unfollowed')
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send({
      message: error
  });
    return next(error);
  }
}



async function postFollowing(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, vcnId } = req.body;
    const result = await postFollowingHandler( userId, vcnId );
      if(result)console.log('following added')
    res.json(result)
  } catch (error) {
    res.status(500).send({
      message: error
  });
    return next(error);
  }
}

async function getFollowingByVacation(req: Request, res: Response, next: NextFunction) {
  try {
    const { vcnId } = req.body;
    const result = await getFollowingsByVacation(vcnId);
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function getFollowingByUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = req.body;
    const result = await getFollowingsByUserHandler(userId);
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}
    export { followingRouter };


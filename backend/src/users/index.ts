
import express, { Request, Response, NextFunction } from "express"
import { postUserHandler } from "./handlers/postUserHandler";
import { postLoginHandler } from "./handlers/postLoginHandler";

const usersRouter = express.Router();

usersRouter.post("/new",postUser)
usersRouter.post("/login",loginUser)

async function loginUser(req:Request,res:Response,next:NextFunction){
  try {
    const {email, pswrd} = req.body;
    if (!email || !pswrd) throw new Error('Some data not entered');
    const result = await postLoginHandler(
       email.toString(), pswrd.toString());
      if(result)console.log('user logged in')
    res.json(result)
  } catch (error) {
    res.status(400).send({
      message: error
  });
    return next(error);
  }
}


async function postUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { firstName, lastName, email, pswrd, userRole } = req.body;
    if (!firstName || !lastName || !email || !pswrd || !userRole) throw new Error('Some data not entered');
    if(firstName.length<3 || lastName.length<3 ) throw new Error('Some user data is too short');
    if(firstName.length>10 || lastName.length>10 ) throw new Error('Some user data is too long');
    if(pswrd.length<5 || lastName.length>10 ) throw new Error('The password should include from 5 to 10 charachters');
   if (pswrd.length<4) throw new Error ('the password length should be 4 letters minimum');
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) throw new Error("Unproper email format entered");
    const result = await postUserHandler(
      firstName.toString(), lastName.toString(), email.toString(), pswrd.toString(), userRole.toString());
      if(result)console.log('user added')
    res.json(result)
  } catch (error) {
    res.status(400).send({
      message: error
  });
    return next(error);
  }
}

function validateEmail(email:string){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
    export { usersRouter };


import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { usersRouter } from './users';
import { vacationsRouter } from './vacations';
import { followingRouter } from './following';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())
app.listen(process.env.PORT,()=> {
    console.log({ message: `Server is active on Port ${process.env.PORT}` })
})
app.get("/health-check", function (req, res, next) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})

app.use("/users", usersRouter)
app.use("/vacations", vacationsRouter)
app.use("/following", followingRouter)





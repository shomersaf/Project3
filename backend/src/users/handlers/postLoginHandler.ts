import { pool } from "../../database";
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import { getHashedPassword } from "./postUserHandler";

async function postLoginHandler( email:string, 
    pswrd:string){
        const hashedPassword = await getHashedPassword(pswrd)
        const query =`SELECT pswrd FROM project3.users WHERE email='${email}';`
        const result = await pool.execute(query)
        const [data] = result;
        let checkup: any = data;
        const isPasswordValid = bcrypt.compareSync(pswrd,checkup[0]?.pswrd)
        if(!isPasswordValid) { throw new Error ('The password entered is not valid')} else{
            const signedToken = jsonwebtoken.sign({ userName: email, role: "user" }, process.env.SECRET as string, { expiresIn: '60m' })
            console.log(signedToken)
        return {result, signedToken}}
        }
        export { postLoginHandler };
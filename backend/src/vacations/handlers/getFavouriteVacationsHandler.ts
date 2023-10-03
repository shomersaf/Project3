
    
import { pool } from "../../database"

async function getFavouriteVacationsHandler(limit:String | undefined, email:any) {

    const query = `select u.email, v.* from project3.users as u join project3.following as f on u.userId = f.fUserId join project3.vacations as v on v.vcnId = f.fVacationId where u.email = '${email}' ${limit};`
    console.log("limit on sql:", limit, "email: ", email, "query: ", query)
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}


export { getFavouriteVacationsHandler }
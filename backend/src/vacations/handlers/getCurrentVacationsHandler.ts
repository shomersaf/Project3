
    
import { pool } from "../../database"

async function getCurrentVacationsHandler(limit:String | undefined) {
console.log("limit on sql:", limit)
    const query = `select *
    from project3.vacations
    where toDate > now()
    and fromDate <= now() ${limit};`
 
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}


export { getCurrentVacationsHandler }
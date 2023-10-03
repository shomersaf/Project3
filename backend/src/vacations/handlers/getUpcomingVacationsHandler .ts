
    
import { pool } from "../../database"

async function getUpcomingVacationsHandler (limit:String | undefined) {
console.log("limit on sql:", limit)
    const query = `select *
    from project3.vacations
    where fromDate > now() ${limit};`
 
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}


export { getUpcomingVacationsHandler  }
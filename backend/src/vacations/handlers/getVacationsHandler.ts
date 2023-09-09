
    
import { pool } from "../../database"

async function getVacationsHandler() {
    const query = `SELECT distinct destination, about, fromDate, toDate, price, imageSrc, count(fUserId) over (partition by destination) as followers FROM project3.vacations LEFT JOIN  project3.following ON project3.vacations.vcnId=project3.following.fVacationId;`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getVacationsHandler }
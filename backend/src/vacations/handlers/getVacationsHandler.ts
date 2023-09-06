
    
import { pool } from "../../database"

async function getVacationsHandler() {
    const query = `SELECT * from project3.vacations`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getVacationsHandler }
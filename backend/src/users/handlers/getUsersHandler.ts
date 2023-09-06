
    
import { pool } from "../../database"

async function getUsersHandler() {
    const query = `SELECT * from project3.users`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getUsersHandler }
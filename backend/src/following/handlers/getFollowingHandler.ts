
    
import { pool } from "../../database"

async function getFollowingHandler() {
    const query = `SELECT * from project3.following`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getFollowingHandler }
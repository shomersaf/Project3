 
import { pool } from "../../database"

async function getFollowingsByUserHandler(userId:number) {
    const query = `SELECT fVacationId FROM project3.following WHERE fUserId = ?`
    const results = await pool.execute(query,[userId]);
    const [data] = results;
    return data;
}

export { getFollowingsByUserHandler }
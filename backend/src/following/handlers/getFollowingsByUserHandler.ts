 
import { pool } from "../../database"

async function getFollowingsByUserHandler(userId:number) {
    const query = `SELECT fVacationId FROM project3.following WHERE fUserId = ${userId}`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getFollowingsByUserHandler }
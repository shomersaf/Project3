  
import { pool } from "../../database"

async function getFollowingsByVacation(vcnId:number) {
    const query = `SELECT fUserId FROM project3.following WHERE fVacationId = ?`
    const results = await pool.execute(query,[vcnId]);
    const [data] = results;
    return data;
}

export { getFollowingsByVacation }

import { pool } from "../../database"

async function deleteFollowingHandler(userId:number,vcnId:number) {
    // console.log(`userId: ${userId}`)
    // console.log(`vcnId: ${vcnId}`)
    const query = `DELETE FROM project3.following WHERE fUserId =? AND fVacationId = ?`
    const results = await pool.execute(query,[userId, vcnId]);
    const [data] = results;
    return data;
}

export { deleteFollowingHandler }
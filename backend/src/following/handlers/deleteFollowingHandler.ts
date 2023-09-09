
import { pool } from "../../database"

async function deleteFollowingHandler(userId:number,vcnId:number) {
    const query = `DELETE FROM project3.following WHERE fUserId =${userId} AND fVacationId = ${vcnId}`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { deleteFollowingHandler }
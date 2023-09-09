
import { pool } from "../../database";

async function postFollowingHandler(
  userId:number,
  vcnId:number
  ) {
    const query = `INSERT INTO project3.following (fUserId, fVacationId) VALUES (?,?);`;
    const result = await pool.execute(query, [
userId, vcnId
    ]);
    return result;  
  }

  export { postFollowingHandler }
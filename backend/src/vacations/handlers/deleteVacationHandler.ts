    
import { pool } from "../../database"

async function deleteVacationHandler(vcnId:number) {
    const query = `DELETE FROM project3.vacations WHERE vcnId =${vcnId}`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { deleteVacationHandler }
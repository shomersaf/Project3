
    
import { pool } from "../../database"

async function getVacationHandler(vcnId:number) {
    const query = `SELECT * FROM project3.vacations WHERE vcnId =?`
    const results = await pool.execute(query,[vcnId]);
    const [data] = results;
    console.log(data);
    return data;
}

export { getVacationHandler }
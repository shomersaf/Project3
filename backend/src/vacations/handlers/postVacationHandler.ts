  
import { pool } from "../../database"

async function postVacationHandler(destination:string, about:string, fromDate:Date, toDate:Date, price:number, imageSrc:string) {
    const query = `INSERT INTO project3.vacations (destination, about,fromDate, toDate, price, imageSrc) VALUES (?, ?, ?, ?, ?, ?);`
    
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { postVacationHandler }
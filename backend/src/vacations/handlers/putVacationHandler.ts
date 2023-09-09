//only for admin
    
import { pool } from "../../database"

async function putVacationHandler(vcnId:number,destination:string, about:string, fromDate:Date, toDate:Date, price:number, imageSrc:string ) {
    const query = `UPDATE project3.vacations SET destination = ${destination}, about = ${about}, fromDate = ${fromDate}, toDate = ${toDate}, price = ${price} WHERE (vcnId = ${vcnId});`
    // const results = await pool.execute(query);
    // const [data] = results;
    // return data;
}

export { putVacationHandler }

    
import { pool } from "../../database"

async function getFavouriteVacationsHandler(limit:String | undefined, email:any) {
 //const query = `select u.email, v.* from project3.users as u join project3.following as f on u.userId = f.fUserId join project3.vacations as v on v.vcnId = f.fVacationId where u.email = '${email}' ${limit};`
//  const query =`SELECT distinct v.*, count(f.fUserId) over (partition by v.destination) as followers
//  FROM project3.users AS u 
//  JOIN project3.following AS f 
//  ON u.userId = f.fUserId 
//  JOIN project3.vacations AS v 
//  ON v.vcnId = f.fVacationId 
//  where u.email = '${email}' 
//  order by v.vcnId
//  ${limit};`  
const query=` with 
x as (
SELECT distinct v.vcnId, v.destination, v.about, v.fromDate, v.toDate, v.price, v.imageSrc
FROM project3.vacations as v
LEFT JOIN  project3.following as f
ON v.vcnId=f.fVacationId 
join project3.users as u
on f.fUserId = u.userId
where u.email = '${email}'  
ORDER BY fromDate
)
select distinct x.*, count(f2.fUserId) over (partition by v2.destination) as followers
from x
join project3.vacations as v2
on x.vcnId = v2.vcnId
join project3.following as f2
on v2.vcnId = f2.fVacationId
join project3.users as u2
on f2.fUserId = u2.userId ${limit};`;
 
 console.log("limit on sql:", limit, "email: ", email, "query: ", query)
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}


export { getFavouriteVacationsHandler }
import { useGetVacationsQuery } from "../store/api/vacations.api."

export function Vacations (){
    const {isLoading,isError,data} = useGetVacationsQuery()
    return(
        <div>
            <h2>Vacations</h2>
        </div>
    )
}
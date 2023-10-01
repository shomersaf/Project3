


import { useSelector } from "react-redux";


export function useFollow(){
    const {following}= useSelector(state =>state as never);
    const { vcnId, email} = following

    return{
      isFollow: !!vcnId,
       vcnId,
       email
    }
}
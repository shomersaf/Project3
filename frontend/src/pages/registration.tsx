
import { useState } from 'react';
import { useLazyPostUserQuery } from '../store/api/vacations.api.';
import { useNavigate } from 'react-router-dom';

export function Registration (){

const navigate = useNavigate();
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
const [pswrd,setPswrd] = useState("");


const [fetchRegistration,{ isSuccess,isLoading,isError}] = useLazyPostUserQuery()
const clickHandler =(firstName:string,lastName:string,email:string,pswrd:string,userRole:string)=>{
   
    fetchRegistration({firstName,lastName,email,pswrd,userRole});

    setFirstName("");
    setLastName("");
    setEmail("");
    setPswrd("");
    if(isSuccess)navigate('/');
  

}

    return(
        <div className="registration">
        
            {isError && <p>Somethimg went wrong...</p>}
            {isLoading && <p>Loading...</p>}
   
            <h2>Registration</h2>
            <form action="#">
            <input type="text" placeholder="first name..." value={firstName} onChange = {(e)=>{setFirstName(e.target.value)}} />
            <input type="text" placeholder="last name..." value={lastName} onChange = {(e)=>{setLastName(e.target.value)}} />
            <input type="text" placeholder="email..." value={email} onChange = {(e)=>{setEmail(e.target.value)}} />
            <input type="text" placeholder="password... " value={pswrd} onChange = {(e)=>{setPswrd(e.target.value)}} />
            </form>
            <button onClick ={()=>{clickHandler(firstName,lastName,email,pswrd,"user")}}>Register</button>
            <p>Already a member?</p>
            <p><a href="/">Login</a></p>

        </div>
    )
}

//Something went wrong works only on second time
//redirect doesn't work after fixing error or loading...
//css for error and loading
//fix some css issues 
//mb the navigate gomponent shoul be used
//the issue of middleware on vacations
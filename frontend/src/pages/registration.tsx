
import { useState } from 'react';
import { useLazyPostUserQuery } from '../store/api/vacations.api.';
import { Navigate } from 'react-router-dom';

export function Registration (){


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

}

    return(
        <div className="registration">
        
            {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
            {isLoading && <p className='loadingP'>Loading...</p>}
            {isSuccess && <Navigate to="/" replace />}
   
            <h2>Registration</h2>
            <form action="#">
            <input type="text" placeholder="first name..." value={firstName} onChange = {(e)=>{setFirstName(e.target.value)}} />
            <input type="text" placeholder="last name..." value={lastName} onChange = {(e)=>{setLastName(e.target.value)}} />
            <input type="text" placeholder="email..." value={email} onChange = {(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="password... " value={pswrd} onChange = {(e)=>{setPswrd(e.target.value)}} />
            </form>
            <button onClick ={()=>{clickHandler(firstName,lastName,email,pswrd,"user")}}>Register</button>
            <p>Already a member?</p>
            <p><a href="/">Login</a></p>

        </div>
    )
}


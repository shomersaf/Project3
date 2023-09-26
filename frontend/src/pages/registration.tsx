
import { useState } from 'react';
import { useRegisterUserMutation} from '../store/api/vacations.api.';
import {  useNavigate,Link, Navigate } from 'react-router-dom';

export function Registration (){
    const navigate = useNavigate();
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
const [pswrd,setPswrd] = useState("");

const [registerUser,{ isSuccess,isLoading,isError}] = useRegisterUserMutation()

const registerUserHandler = async (firstName:string,lastName:string,email:string,pswrd:string,userRole:string)=>{
    if(firstName && lastName && email && pswrd && userRole){
        await registerUser({firstName,lastName,email,pswrd,userRole}).unwrap();
        
        setFirstName("");
        setLastName("");
        setEmail("");
        setPswrd("");
        alert("User successfully registered")
    }else{
        alert ("Some of forms fields are empty. Enter the data, please!")
    }
 
}

    return(
        <div className="registration">
            <h1>My Vacations</h1>
         <h2>Registration</h2>
            {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
            {isLoading && <p className='loadingP'>Loading...</p> ||
            <div className='registrateDiv'><form action="#">
            <input type="text" placeholder="first name..." value={firstName} onChange = {(e)=>{setFirstName(e.target.value)}} />
            <input type="text" placeholder="last name..." value={lastName} onChange = {(e)=>{setLastName(e.target.value)}} />
            <input type="text" placeholder="email..." value={email} onChange = {(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="password... " value={pswrd} onChange = {(e)=>{setPswrd(e.target.value)}} />
            </form>
            <div className="buttons">
            <button onClick ={()=>{registerUserHandler(firstName,lastName,email,pswrd,"user")}}>Register</button>
            <button onClick ={()=>{
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setPswrd("");
                navigate("/")}}>Cancell</button>
            </div>
            
            <p>Already a member?</p>
            <p><Link to="/login">Login</Link></p></div>
            }
            {isSuccess && <Navigate to="/login" />}
        </div>
    )
}


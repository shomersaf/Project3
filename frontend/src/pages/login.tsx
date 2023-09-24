import { useLoginUserMutation } from "../store/api/vacations.api."
import { useState,useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState("");
    const [pswrd, setPswrd] = useState("");

    const [loginUser, { isSuccess, isLoading, isError, data }] = useLoginUserMutation()
   
    if(data?.signedToken){
        localStorage.setItem("token", data?.signedToken)
    }
   
    useEffect(() => {
        localStorage.removeItem("token")
        return () => {
            console.log("Unmount Login Component Now!!!!")
        }
    }, [])
    const loginUserHandler = async (email: string, pswrd: string) => {
        await loginUser({ email, pswrd }).unwrap(); {
             setEmail("")
             setPswrd("")
             alert("User successfully logged in")
            }
    }
    return (
        <div className="login">
            <h1>My Vacations</h1>
            <h2>Login</h2>
            {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
            {isLoading && <p className='loadingP'>Loading...</p> ||
                <div className="loginDiv">
                    <form action="#">
                        <input type="text" placeholder="email..." value={email} onChange ={(e)=>{setEmail(e.target.value)}}/>
                        <input type="password" placeholder="password..." value={pswrd} onChange ={(e)=>{setPswrd(e.target.value)}}/>
                    </form>
                    <div className="buttons">
                        <button onClick={() => { loginUserHandler(email, pswrd) }}>Login</button>
                        <button onClick={() => {
                            setEmail("")
                            setPswrd("")
                        }}>Cancell</button>
                    </div>

                    <p>Don't have an account?</p>
                    <p><Link to="users/new">Register now</Link></p>
                </div>
            }
            {isSuccess &&  <Navigate to="/vacations/editAll" replace />}
        </div>
    )
}
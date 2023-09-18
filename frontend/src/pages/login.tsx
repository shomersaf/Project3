export function Login (){
    return(
        <div className="login">
        <h2>Login</h2>
        <form action="#">
        <input type="text" placeholder="email..." />
        <input type="text" placeholder="password..." />
        </form>
        <button>Register</button>
        <p>Don't have an account?</p>
        <p><a href="./new">Register now</a></p>

    </div>
    )
}
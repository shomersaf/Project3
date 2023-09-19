export function Login (){
    return(
        <div className="login">
        <h2>Login</h2>
        <form action="#">
        <input type="text" placeholder="email..." />
        <input type="password" placeholder="password..." />
        </form>
        <button>Login</button>
        <p>Don't have an account?</p>
        <p><a href="users/new">Register now</a></p>

    </div>
    )
}
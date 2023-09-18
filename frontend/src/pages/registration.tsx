export function Registration (){
    return(
        <div className="registration">
            <h2>Registration</h2>
            <form action="#">
            <input type="text" placeholder="first name..." />
            <input type="text" placeholder="last name..." />
            <input type="text" placeholder="email..." />
            <input type="text" placeholder="password..." />
            </form>
            <button>Register</button>
            <p>Already a member?</p>
            <p><a href="./login">Login</a></p>

        </div>
    )
}
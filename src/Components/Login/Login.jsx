import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContex } from "../../Contex/AuthProvider";

const Login = () => {
    const [error, setError] = useState('')
    const {signIn} = use(AuthContex)
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})
        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode)
        })
    }
  return (
    <div className="flex justify-center items-center my-45">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" required/>

            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" required/>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p>
          Don't have any account,{" "}
          <Link className="text-yellow-500" to={"/register"}>
            Register
          </Link>
        </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../../Contex/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContex)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name, url, email, password})
        createUser(email, password)
        .then((result)=>{
            const user = result.user;
            updateUser({displayName: name, photoURL: url})
            .then(()=>{
                setUser({...user, displayName: name, photoURL: url})
navigate('/')
            })
            .catch((error)=>{
              console.log(error)  
              setUser(user)
            })
            // console.log(user)
        })
        .catch((error)=>{
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }
    const handleSetPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
    
    return (
        <div className="flex justify-center items-center my-45">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" name='name' placeholder="Name" required/>
            <label className="label">Photo URL</label>
            <input type="text" className="input" name='url' placeholder="Photo URL" required/>
            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" required/>
            <label className="label">Password</label>
            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                name="password"
                                placeholder="Password"
                                required
                              />
                              <button type="button"
                                onClick={handleSetPassword}
                                className="btn btn-xs absolute right-5 top-2 z-1"
                              >
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                              </button>
                            </div>
            {/* <input type="password" className="input" name='password' placeholder="Password" required/> */}
            
            
            <button className="btn btn-neutral mt-4">Login</button>
            <p>
          Already have an account?,{" "}
          <Link className="text-yellow-500" to={"/log-in"}>
            Login
          </Link>
        </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;
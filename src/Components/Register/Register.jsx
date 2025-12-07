import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContex } from "../../Contex/AuthProvider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import "animate.css";

const Register = () => {
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { createUser, setUser, updateUser } = use(AuthContex);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const p = e.target.value;

    let strength = 0;
    if (/[A-Z]/.test(p)) strength += 1;
    if (/[a-z]/.test(p)) strength += 1;
    if (p.length >= 6) strength += 1;

    setPasswordStrength(strength);
    setError("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: url })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: url });
            navigate("/");
          })
          .catch((error) => {
            toast(error);
            setUser(user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSetPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center my-45">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center animate__animated animate__bounce">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="url"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={handleSetPassword}
                className="btn btn-xs absolute right-5 top-2 z-1"
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            {/* ===== Password Strength Meter ===== */}
            <div className="mt-2 w-full h-2 rounded bg-gray-300">
              <div
                className={`h-full rounded ${
                  passwordStrength === 1
                    ? "bg-red-500"
                    : passwordStrength === 2
                    ? "bg-yellow-500"
                    : passwordStrength === 3
                    ? "bg-green-500"
                    : ""
                }`}
                style={{ width: `${(passwordStrength / 3) * 100}%` }}
              ></div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button className="btn btn-neutral mt-4">Register</button>

            <p>
              Already have an account?{" "}
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

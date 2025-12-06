import React, { use} from "react";
import { AuthContex } from "../../Contex/AuthProvider";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const {passwordReset} = use(AuthContex)

    const handleReset = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        passwordReset(email)
        .then(() => {
    // Password reset email sent!
    // ..
    window.open(
  'https://mail.google.com/',
  '_blank',
  'width=800,height=600'
);
navigate('/log-in')
  })
  .catch((error) => {
    console.log(error)
    // ..
  });
        
    }
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-50">
        <h2 className="text-2xl font-semibold text-center">
          Reset your password
        </h2>
        <form onSubmit={handleReset} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Reset
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

import React, { use, useState } from "react";
import { AuthContex } from "../../Contex/AuthProvider";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser, updateUser } = use(AuthContex);
  const [form, setForm] = useState(false);
  const handleForm = () => {
    setForm(!form)
    
  }
const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        // console.log({name, url,})
        updateUser({displayName: name, photoURL: url})
            .then(()=>{
                setUser({...user, displayName: name, photoURL: url})
                setForm(false)
                 toast.success("UpDated successfully!")
                

            })
            .catch((error)=>{
              toast(error)  
              setUser(user)
            })
       
    }
  return (
    <div>
      <div className="conatiner mx-auto flex justify-center">
      
      <div className="bg-gray-100 p-10 flex flex-col gap-4 m-20">
        <img
          className="w-[250px] h-[250px] rounded-[50%]"
          src={user.photoURL}
          alt={user.displayName}
        />
        <h2 className="font-semibold text-center text-xl">
          Name : {user && user.displayName}
        </h2>
        <h2 className="font-semibold text-center">
          Email : {user && user.email}
          <span></span>
        </h2>
        <button onClick={handleForm} className="btn bg-amber-500 hover:bg-amber-100">Edit Profile</button>
      </div>
    </div>
    {
      form ? <form onSubmit={handleUpdate} className="card-body flex items-center justify-center">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input type="text" className="input" name='name' placeholder="Name" required/>
                  <label className="label">Photo URL</label>
                  <input type="text" className="input" name='url' placeholder="Photo URL" required/>
                  <button className="btn btn-neutral mt-4">Update</button>
                </fieldset>
              </form> : ''
    }
    <Toaster />
    </div>
  );
};

export default MyProfile;

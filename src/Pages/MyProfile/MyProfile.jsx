import React, { use } from "react";
import { AuthContex } from "../../Contex/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContex);
  console.log(user.photoURL);
  return (
    <div className="conatiner mx-auto flex justify-center">
      <div className="bg-gray-100 p-10 flex flex-col gap-4 m-30">
        <img
          className="w-[250px] h-[250px] rounded-full"
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
        <Link to={''} className="btn bg-amber-500 hover:bg-amber-100">Edit Profile</Link>
      </div>
    </div>
  );
};

export default MyProfile;

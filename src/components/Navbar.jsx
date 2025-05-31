import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import button from "daisyui/components/button";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("User trying to LogOut");
    logOut()
      .then(() => {
        alert("You logged out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userImg}`} alt="" />

        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10 ">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

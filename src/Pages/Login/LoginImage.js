import React from "react";
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";


const LoginImage = ({photoURL}) => {
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
  return (
    <>
      <div className="dropdown dropdown-end p-0">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            
            {photoURL ? <img src={photoURL} alt="photoURL" /> : <img src="https://placeimg.com/80/80/people" alt="photoURL" />}
          </div>
        </label>
        <ul
          tabIndex={0}
          style={{ marginTop: "135px" }}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li><Link className=" btn-outline rounded-md menuItem mb-2" to="/dashboard">Dashboard</Link></li>
          <li onClick={logout}>
          <button className=" btn-outline btn-primary rounded-md"  onClick={logout} >Sign Out</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginImage;

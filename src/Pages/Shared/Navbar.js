
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logo1.png'
import LoginImage from '../Login/LoginImage';

const navbar_type_classes = {
    banner: 'bannerNavbar',
}

const Navbar = ({navbarType, ...otherProps}) => {
    const [user] = useAuthState(auth);

    // console.log(user.photoURL);

    // const logout = () => {
    //     signOut(auth);
    //     localStorage.removeItem('accessToken');
    //   };

    const menuItems = <>
        <li><Link className="btn-outline text-bold rounded-md menuItem" to="/">Home</Link></li>
        <li><Link className="btn-outline rounded-md menuItem" to="/services">Services</Link></li>
        <li><Link className="btn-outline rounded-md menuItem" to="/pricing">Pricing</Link></li>
        <li><Link  className="btn-outline rounded-md menuItem" to="/">How It Works</Link></li>
        <li><Link className=" btn-outline rounded-md menuItem" to="/about">About</Link></li>
        <li><Link className="btn-outline rounded-md menuItem" to="/contact">Contact</Link></li>
        <li>{user ? <LoginImage photoURL = {user.photoURL}/>:<Link  className="btn-outline menuItem rounded-md" to="/login">Login </Link>}</li>
        
        {/* <li>{user ? <button className="btn btn-outline btn-primary rounded-md"  onClick={logout} >Sign Out</button> : <Link  className="btn-outline menuItem rounded-md" to="/login">Login </Link>}</li> */}
    </>
    return (
        <div  className={`navbar max-w-7xl mx-auto px-12 ${navbar_type_classes[navbarType]}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        
                    </ul>
                    
                </div>
                <Link to="/" className="normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;
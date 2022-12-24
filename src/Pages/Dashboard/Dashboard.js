import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState} from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init'
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <>
         <Navbar dashboard="dashboard"></Navbar>
        <div class="drawer drawer-mobile max-w-7xl mx-auto px-12 bg-red">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content " style={{backgroundColor: "#D2DAFF"}}>
                <h2 className='text-2xl font-bold text-accent my-6 flex justify-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content" style={{backgroundColor: " #D2DAFF"}}>
                    <li><Link to="/dashboard">My Services</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                    { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addTechnician">Add Technician</Link></li>
                        <li><Link to="/dashboard/manageTechnician">Manage Technician</Link></li>
                    </>}
                </ul>

            </div>
            
        </div>
        </>
    );
};

export default Dashboard;
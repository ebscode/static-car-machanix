import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
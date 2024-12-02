import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import Banner from '../Home/Banner';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-purple-500 text-white w-11/12 mx-auto rounded-2xl'>
            <div className='flex justify-between items-center m-3 p-5 '>
                <h1>Gadget Heaven</h1>
                <div className='flex gap-10'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/statistic'}>Statistic</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </div>
                
                <div className='flex gap-5'>
                    <IoCartOutline></IoCartOutline>
                    <FaRegHeart></FaRegHeart>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
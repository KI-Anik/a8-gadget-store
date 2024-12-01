import React from 'react';
import Home from './Home';
import Statistic from './Statistic'
import DashBoard from './DashBoard'
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='bg-purple-500 text-white pb-[300px] w-11/12 mx-auto rounded-2xl'>
            <div className='flex justify-between items-center m-3 p-5 '>
                <h1>Gadget Heaven</h1>
                <div className='flex gap-10'>
                    <Home></Home>
                    <Statistic></Statistic>
                    <DashBoard></DashBoard>
                </div>
                <div className='flex gap-5'>
                    <IoCartOutline></IoCartOutline>
                    <FaRegHeart></FaRegHeart>
                </div>
            </div>
            <div className='w-3/4 mx-auto text-center space-y-6'>

                <h1 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <button className='btn bg-white text-purple-600 rounded-full px-6 font-bold'>Shop Now</button>
            </div>
            <div className='absolute border w-2/3  p-3 rounded-3xl inline left-1/4'>
            <img className='rounded-2xl' src="/public/assets/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div className='text-center space-y-6 bg-purple-500 pb-12 pt-10'>

                <h1 className='text-5xl font-bold'>Dashboard</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className='btn btn-success'>Cart</button>
            <button className='btn btn-success ml-5'>Wishlist</button>
            </div>
            <h1 className='text-5xl text-center p-5'>No content</h1>
        </div>
    );
};

export default DashBoard;
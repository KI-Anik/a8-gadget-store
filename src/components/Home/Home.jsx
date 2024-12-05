import React from 'react';
import Banner from './Banner';
import AllProducts from '../AllProducts/AllProducts';

const Home = () => {
    return (
        <div className='bg-slate-100 py-8'>
            <Banner></Banner>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;
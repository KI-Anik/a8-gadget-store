import React from 'react';
import Banner from './Banner';
import AllProducts from '../AllProducts/AllProducts';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;
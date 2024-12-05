import React from 'react';

const Banner = () => {
    return (
        <div className=''>

            <div className='text-center space-y-6 bg-purple-500 pb-72 pt-10'>

                <h1 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <button className='btn bg-white text-purple-600 rounded-full px-6 font-bold'>Shop Now</button>
            </div>

            {/* Image section start */}
            <div className='flex justify-center'>
                <div className=' relative bottom-60 border w-1/2 p-3 rounded-3xl  mt-7'>
                    <img className='rounded-2xl w-full' src="/public/assets/banner.jpg" alt="" />
                </div>
            </div>
            {/* Image section end */}

        </div>
    );
};

export default Banner;
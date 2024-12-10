import React from 'react';

const CardList = ({cart}) => {
    const { id: currentBookId, product_image, product_title, price, description, specification, rating } = cart

    return (
        <div className="  mx-auto rounded-3xl py-2">
        <div className="bg-white p-5 grid grid-cols-3 items-center">
            <img
                src={product_image}
                className="rounded-2xl shadow-2xl " />
                
            <div className='space-y-2'>
                <h1 className="text-xl font-bold">{product_title}</h1>
                <p>
                    {description}
                </p>
                <p>Price: ${price}</p>
            </div>
            <button className=' '>delete</button>
        </div>
    </div>
    );
};

export default CardList;
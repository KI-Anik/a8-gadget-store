import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CardList = ({cart, handleRemove}) => {
    const { id, product_image, product_title, price, description, specification, rating } = cart

    return (
        <div className=" py-2">
        <div className="bg-white p-5 grid grid-cols-3 items-center gri">
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
            <button onClick={()=>handleRemove(id)} className='mx-auto'><FaTrashAlt></FaTrashAlt></button>
            
        </div>
    </div>
    );
};

export default CardList;
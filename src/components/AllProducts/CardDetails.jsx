import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';


const CardDetails = () => {

    const { id } = useParams()
    const pId = parseInt(id)
    const data = useLoaderData()

    const singleCard = data.find(card => card.id === pId)

    const { id: currentBookId, product_image, product_title, price, description, specification, rating } = singleCard

    return (
        <div>
            
        <div className="hero bg-white w-3/5 mx-auto rounded-3xl py-5">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img
                    src={product_image}
                    className=" rounded-lg shadow-2xl w-1/3" />
                <div className='space-y-4'>
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p>Price: ${price}</p>
                    <p className="">
                        {description}
                    </p>
                    <p>
                        Specification:
                        {
                            specification.map(spec => <li>{spec}</li>)
                        }
                    </p>
                    <p>
                        Rating: {rating}
                    </p>
                    <button className="btn btn-primary">Add to cart</button>
                    <FaRegHeart></FaRegHeart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CardDetails;
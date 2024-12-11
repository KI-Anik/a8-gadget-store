import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { addToStoredList } from '../Utils';
import { FaCartShopping } from 'react-icons/fa6';


const CardDetails = () => {
    const { id } = useParams()
    const pId = parseInt(id)
    const data = useLoaderData()

    const singleCard = data.find(card => card.id === pId)
    const { id: currentBookId, product_image, product_title, price, description, specification, rating } = singleCard

    return (
        <div>
            <div className='text-white text-center space-y-6 bg-purple-500 pb-44 pt-10'>

                <h1 className='text-5xl font-bold'>Product Details</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>

            <div className="hero bg-white w-3/5 mx-auto rounded-3xl py-5 relative bottom-36">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={product_image}
                        className="rounded-2xl shadow-2xl w-1/3" />
                    <div className='space-y-4'>
                        <h1 className="text-2xl font-bold">{product_title}</h1>
                        <p className='font-semibold'>Price: ${price}</p>
                        <p>{description}</p>
                            
                        <p>
                            Specification:
                            {
                                specification.map((spec, idx) => <li key={idx}>{spec}</li>)
                            }
                        </p>

                        <p>Rating: {rating}</p>

                            {/* value store in local storage */}
                        <div className='flex gap-4 items-center'>
                            <button onClick={() => 
                            addToStoredList(singleCard, 'cart')} 
                            className="btn btn-secondary">
                                Add to cart <FaCartShopping></FaCartShopping> 
                                </button>

                            <button onClick={() => 
                                addToStoredList(singleCard, 'wish-list')} 
                                className='btn hover:btn-secondary' >
                                    <FaRegHeart ></FaRegHeart>
                                    </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const AllProducts = () => {
    // const data = useLoaderData()
    // const id = useParams()
    const [gadget, setGadget] = useState([])

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setGadget(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid  grid-cols-1 md:grid-cols-4 my-12 gap-6'>
                <aside className='row-span-4 w-9/12 mx-auto'>

                    <ul className='card bg-base-100 items-center justify-center shadow-xl py-8'>
                        {/* applied raw css */}
                        <Link to={'/'}>All Products</Link>
                        <Link to={''}>Iphone</Link>
                        <Link to={''}>Samsung</Link>
                        <Link to={''}>Oppo</Link>
                        <Link to={''}>I-pad</Link>
                    </ul>
                </aside>

                {
                    gadget.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};

export default AllProducts;
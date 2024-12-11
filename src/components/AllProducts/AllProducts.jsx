import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllProducts = ({categories}) => {

    const [gadget, setGadget] = useState([])
    const [category, setCategory] = useState("All Product")

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                if(category === "All Product"){
                    setGadget(data)
                }
                else{
                    const filterData = data.filter(item=> item.category === category)
                    setGadget(filterData)
                }
            })
    }, [category])

    const handleCategory= (name) => {
        setCategory(name)
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 my-12 pb-10 gap-6'>
                
                <aside className='row-span-4 w-9/12 mx-auto'>

                    <div className='card bg-base-100 items-center shadow-xl py-8 gap-5'>
                        {
                            categories.map(item => <button key={item.id} className='btn hover:bg-purple-500' onClick={()=> handleCategory(item.category)}>{item.category}</button>)
                        }
                    </div>
                </aside>

                {
                   gadget.length === 0 ? <p className='text-5xl text-center p-5'>No content</p> :  gadget.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};

export default AllProducts;
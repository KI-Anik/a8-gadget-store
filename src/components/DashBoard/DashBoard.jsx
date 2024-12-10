import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList, removeList } from '../Utils';
import CardList from './cardList';

const DashBoard = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const storedList = getStoredList()
        setCarts(storedList)
    }, [])

    const handleRemove = id =>{
        removeList(id)
        const storedList = getStoredList()
        setCarts(storedList)
    }

    return (
        <div>
            <div className='text-center space-y-6 bg-purple-500 pb-12 pt-10'>

                <h1 className='text-5xl font-bold'>Dashboard</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>


            </div>
            <Tabs>
                <TabList >
                    <Tab>Cart</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>

                    <div className='p-4'>
                    {
                        carts.map(cart => <CardList
                             key={cart.id}
                              cart={cart}
                              handleRemove={handleRemove}
                              ></CardList>)
                    }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

{
    carts.length == 0 && <h1 className='text-5xl text-center p-5'>No content</h1>
}
            
        </div>
    );
};

export default DashBoard;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../Utils';
import CardList from './cardList';

const DashBoard = () => {
    const allData = useLoaderData();

    console.log(Array.isArray(allData))
    
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const storedList = getStoredList()
        const storedListInt = storedList.map(id => parseInt(id))

        const cartList = allData.filter(product => storedListInt.includes(product.id))
        setCarts(cartList)
    }, [allData])

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

                    <div className='p-4 '>
                    {
                        carts.map(cart => <CardList key={cart.id} cart={cart}></CardList>)
                    }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

            <h1 className='text-5xl text-center p-5'>No content</h1>
        </div>
    );
};

export default DashBoard;
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addToStoredList, getStoredList, removeList } from '../Utils';
import CardList from './cardList';

const DashBoard = () => {
    const [carts, setCarts] = useState([]);
    const [wishLists, setwishLists] = useState([])


    useEffect(() => {
        setCarts(getStoredList('cart'))
        setwishLists(getStoredList('wish-list'))
    }, [])

    const handleRemove = (id, type) => {
        removeList(id, type);

        if (type === 'cart') {
            setCarts(getStoredList('cart'))
        } else {
            setwishLists(getStoredList('wish-list'))
        }
    };

    const moveToCart = item => {
        handleRemove(item.id, 'wish-list')
        addToStoredList(item, 'cart')
        setCarts(getStoredList('cart'))
    }

    return (
        <div>
            <div className='text-center space-y-6 bg-purple-500 pb-12 pt-10'>

                <h1 className='text-5xl font-bold'>Dashboard</h1>
                <p className='font-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>

            <div className='flex justify-end items-center gap-10'>
                <h3>Price :</h3>
                <button>Sort By price</button>
                <button>Purchase</button>
            </div>
            <Tabs>
                <TabList >
                    <Tab>Cart</Tab>
                    <Tab>Wishlists</Tab>
                </TabList>

                <TabPanel>
                    <div className='p-4'>
                        {
                            carts.map(item => <CardList
                                key={item.id}
                                item={item}
                                handleRemove={() => handleRemove(item.id, 'cart')}
                            ></CardList>)
                        }
                    </div>
                    {
                        carts.length == 0 && <h1 className='text-5xl text-center p-5'>No content</h1>
                    }
                </TabPanel>

                <TabPanel>
                    <div className='p-4'>
                        {
                            wishLists.map(item => <CardList
                                key={item.id}
                                item={item}
                                handleRemove={() => handleRemove(item.id, 'wish-list')}
                                moveToCart={() => moveToCart(item)}
                            ></CardList>)
                        }
                    </div>
                    {
                        wishLists.length == 0 && <h1 className='text-5xl text-center p-5'>No content</h1>
                    }
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default DashBoard;
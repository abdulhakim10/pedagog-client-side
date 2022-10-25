import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='border grid grid-cols-4'>
                <div className=''>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className='border col-span-3 w-full'>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;
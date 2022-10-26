import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div className='m-8'>
            <Header></Header>
            <Outlet></Outlet>
            {/* <div className='border grid grid-cols-4'>
                <div className=''>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-3 m-auto my-12 md:w-2/4'>
                <Outlet></Outlet>
                </div>
            </div> */}
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Foo from '../Pages/Shared/Footer/Foo';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <div className='m-8'>
            <Header></Header>
            <Outlet></Outlet>
           <Foo></Foo>
        </div>
    );
};

export default Main;
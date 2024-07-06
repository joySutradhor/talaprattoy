// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeaderSection from './Shared/HeaderSection/HeaderSection';
import { Outlet } from 'react-router-dom';
import FooterSection from './Shared/FooterSection/FooterSection';

const Main = () => {
    return (
        <div className='bg-[#030303]'>
            <HeaderSection></HeaderSection>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;
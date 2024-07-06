// eslint-disable-next-line no-unused-vars
import React from 'react';
import DiscoverTala from './DiscoverTala/DiscoverTala';
import Objective from './Objective/Objective';
import HomeVideo from './HomeVideo/HomeVideo';
import Award from './Award/Award';

const Home = () => {
    return (
        <div>
            <DiscoverTala></DiscoverTala>
            <Objective></Objective>
            <HomeVideo></HomeVideo>
            <Award></Award>
        </div>
    );
};

export default Home;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DiscoverTala from './DiscoverTala/DiscoverTala';
import Objective from './Objective/Objective';
import HomeVideo from './HomeVideo/HomeVideo';
import Award from './Award/Award';
import Advertise from './Advertise/Advertise';
import Gallery from './Gallery/Gallery';
import TalaNews from './TalaNews/TalaNews';
import Faq from './Faq/Faq';

const Home = () => {
    return (
        <div>
            <DiscoverTala></DiscoverTala>
            <Objective></Objective>
            <HomeVideo></HomeVideo>
            <Award></Award>
            <Advertise></Advertise>
            <Gallery></Gallery>
            <TalaNews></TalaNews>
            <Faq></Faq>
        </div>
    );
};

export default Home;
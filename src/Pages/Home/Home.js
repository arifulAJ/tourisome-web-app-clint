import React from 'react';
import Navigation from '../../Components/ShareComponents/Navbar/Navigation';
import CardCarosule from './CardCarosule/CardCarosule';
import Tours from './Tours/Tours';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <CardCarosule></CardCarosule>
            <Tours></Tours>
        </div>
    );
};

export default Home;
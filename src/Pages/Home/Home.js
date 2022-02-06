import React from 'react';
import Navigation from '../../Components/ShareComponents/Navbar/Navigation';
import Career from '../Career/Career';
import CardCarosule from './CardCarosule/CardCarosule';
import Tours from './Tours/Tours';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <CardCarosule></CardCarosule>
            <Tours></Tours>
            <Career></Career>
        </div>
    );
};

export default Home;
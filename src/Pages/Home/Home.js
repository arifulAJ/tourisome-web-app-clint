import React from 'react';
import Navigation from '../../Components/ShareComponents/Navbar/Navigation';
import CardCarosule from './CardCarosule/CardCarosule';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <CardCarosule></CardCarosule>
        </div>
    );
};

export default Home;
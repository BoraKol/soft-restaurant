import React from 'react';
import Banner from '../components/Banner';
import Foods from '../components/Food Showcase/Foods';
import FoodItem from '../components/Food Showcase/FoodItem';
import Skeleton from '../components/Food Showcase/Skeleton';
import Footer from '../components/Footer/Footer';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Foods />
            <Footer />
           
            
        </>
    )
}

export default HomeScreen
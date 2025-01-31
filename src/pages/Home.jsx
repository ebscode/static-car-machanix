import React from 'react';
import BannerSlider from '../Components/Banner/BannerSlider';
import ServicesShowcase from '../Components/services/ServicesShowcase';
import WhyChooseUs from '../Components/feature/WhyChooseUs';
import FeaturedWork from '../Components/featurework/FeaturedWork';
import TeamSection from '../Components/teamsection/TeamSection';
import BookingSection from '../Components/BokingSection/BookingSection';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <ServicesShowcase></ServicesShowcase>
            <WhyChooseUs></WhyChooseUs>
            <FeaturedWork></FeaturedWork>
            <TeamSection></TeamSection>
            <BookingSection></BookingSection>
        </div>
    );
};

export default Home;
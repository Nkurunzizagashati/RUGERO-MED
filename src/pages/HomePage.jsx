import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsSection from '../components/home/SolutionsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Manufacturers from '../components/home/Manufacturers';
import ContactUs from '../components/home/ContactUs';
import AnimatedSection from '../components/AnimatedSection'; // adjust path as needed

const HomePage = () => {
	return (
		<>
			<AnimatedSection>
				<HeroSection />
			</AnimatedSection>

			<AnimatedSection>
				<SolutionsSection />
			</AnimatedSection>

			<WhyChooseUs />

			<AnimatedSection>
				<FeaturedProducts />
			</AnimatedSection>

			<AnimatedSection>
				<TestimonialsSection />
			</AnimatedSection>

			<AnimatedSection>
				<Manufacturers />
			</AnimatedSection>

			<ContactUs />
		</>
	);
};

export default HomePage;

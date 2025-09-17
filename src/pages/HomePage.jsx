import React from 'react';
import SEO from '../components/SEO';
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
			<SEO 
				title="Home"
				description="RugeroMed - Leading provider of medical equipment and healthcare solutions in Africa. Discover our range of medical devices and services."
				keywords="medical equipment, healthcare solutions, hospital supplies, medical devices, Africa healthcare, medical technology"
			/>
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

			{/* <ContactUs /> */}
		</>
	);
};

export default HomePage;

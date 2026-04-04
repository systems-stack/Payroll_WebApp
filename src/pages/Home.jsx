import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import AboutBrief from '../components/home/AboutBrief';
import ServicesList from '../components/home/ServicesList';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <AboutBrief />
      <ServicesList />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
};

export default Home;

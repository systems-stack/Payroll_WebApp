import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="hero" ref={ref}>
      <motion.div 
        className="hero-overlay"
        style={{ y }}
      ></motion.div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            65+ Years of Trust & Excellence
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Trusted <span>Financial & Taxation</span> Partner
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Upholding a 65-year legacy of integrity. End-to-end expertise in GST, Income Tax, Audit, Business Registration, and Financial Advisory.
          </motion.p>
          <motion.div 
            className="hero-actions flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn btn-secondary">
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Explore Services
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex gap-6 text-sm text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="flex items-center gap-2"><CheckCircle2 size={16} color="var(--secondary)" /> Expert CA Team</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} color="var(--secondary)" /> 100% Compliance</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} color="var(--secondary)" /> Timely Delivery</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
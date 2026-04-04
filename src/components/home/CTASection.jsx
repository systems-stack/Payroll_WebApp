import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* cta-inner replaces the broken "relative z-10" className — those classes
          were not defined in index.css. cta-inner is defined in Home.css. */}
      <div className="container cta-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Optimize Your Finances?</h2>
          <p>
            Schedule a detailed consultation with our experts to discover customized taxation
            structures, solid compliance, and accelerated growth pathways.
          </p>
          {/* Removed duplicate inline style — className already sets display:flex, justify, gap, wrap */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '0.875rem 1.875rem' }}
            >
              <Calendar size={18} /> Book a Free Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="btn btn-outline"
              style={{ fontSize: '1rem', padding: '0.875rem 1.875rem' }}
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
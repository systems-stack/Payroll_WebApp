import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, CheckSquare, Building, BookOpen, Landmark, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'GST Consultancy & Compliance',
    description: 'End-to-end GST solutions to ensure smooth compliance and maximum efficiency.',
    icon: <Calculator size={28} />
  },
  {
    id: 2,
    title: 'Income Tax Services',
    description: 'Comprehensive tax solutions tailored for individuals and businesses.',
    icon: <FileText size={28} />
  },
  {
    id: 3,
    title: 'Audit & Assurance',
    description: 'Reliable audit services ensuring transparency and regulatory compliance.',
    icon: <CheckSquare size={28} />
  },
  {
    id: 4,
    title: 'Business Registration & Structuring',
    description: 'Helping you start and structure your business the right way.',
    icon: <Building size={28} />
  },
  {
    id: 5,
    title: 'Accounting & Bookkeeping',
    description: 'Accurate financial records to support informed decision-making.',
    icon: <BookOpen size={28} />
  },
  {
    id: 6,
    title: 'Financial Advisory & Consulting',
    description: 'Strategic insights to drive business growth and profitability.',
    icon: <Landmark size={28} />
  },
  {
    id: 7,
    title: 'Compliance & Regulatory',
    description: 'Ensuring your business stays fully compliant at all times.',
    icon: <Briefcase size={28} />
  },
  {
    id: 8,
    title: 'Specialized & Value-Added',
    description: 'Focused solutions for complex and high-value requirements.',
    icon: <Award size={28} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesList = () => {
  return (
    <section className="section services-bg">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Comprehensive Financial Services</h2>
          <p className="section-subtitle">
            Delivering precision, compliance, and growth-oriented solutions tailored for your business.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <Link to={`/services`} className="service-link">
                Read More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;

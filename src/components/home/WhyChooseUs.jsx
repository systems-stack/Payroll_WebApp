import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BookOpen, TrendingUp, Clock, Users } from 'lucide-react';

// Fix: two cards had the same Clock icon — replaced the second with Users
const reasons = [
  {
    icon: <Award size={36} />,
    title: '65+ Years Experience',
    desc: 'Led by seasoned professionals with distinct knowledge and a trusted legacy spanning six decades.'
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Strong Reputation',
    desc: 'Uncompromising integrity and long-term client relationships that span generations.'
  },
  {
    icon: <BookOpen size={36} />,
    title: 'Deep Industry Knowledge',
    desc: 'Custom accounting strategies smoothly aligned with diverse sectors and regulatory environments.'
  },
  {
    icon: <TrendingUp size={36} />,
    title: 'Personalized Solutions',
    desc: 'Practical, result-oriented strategies focused exclusively on your specific business goals.'
  },
  {
    icon: <Clock size={36} />,
    title: 'Timeliness & Accuracy',
    desc: 'Rapid turnaround on assignments with strict adherence to every regulatory compliance deadline.'
  },
  {
    icon: <Users size={36} />,
    title: '24/7 Availability',
    desc: 'Always-on assistance ensuring your business never pauses — experts available at any hour.'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

const WhyChooseUs = () => {
  return (
    <section className="section why-us-bg">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Entrusting your financial management to us guarantees unparalleled professionalism
            and robust long-term growth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className="why-card" variants={itemVariants}>
              <div className="why-card-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
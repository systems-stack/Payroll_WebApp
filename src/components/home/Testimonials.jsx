import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Rohit KC Jain & Company transformed our taxation processes. Their team's proactive approach saved us significantly on compliance penalties.",
    name: "Amit Sharma",
    role: "Director, TechVision Pvt Ltd"
  },
  {
    text: "Best CA firm we've worked with. Their virtual CFO services have drastically improved our cash flow management and investor reporting.",
    name: "Neha Gupta",
    role: "Founder, E-Retail Hub"
  },
  {
    text: "Incredibly thorough audits. The diligence they bring to the table makes them an essential partner for our manufacturing unit.",
    name: "Rajesh Kumar",
    role: "Finance Head, Zenith Corp"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Trusted By Visionaries</h2>
          <p className="section-subtitle">Read what our esteemed clients have to say about our professionalism.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="client-info">
                <div className="client-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="client-name">{review.name}</div>
                  <div className="client-role">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

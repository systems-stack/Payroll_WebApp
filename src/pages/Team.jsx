import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, Briefcase, Compass, Target, Handshake,
  Award, ShieldCheck, GraduationCap, Users
} from 'lucide-react';

import rohitImg from '../assets/3.jpeg';
import artiImg from '../assets/4.jpeg';
import riteshImg from '../assets/5.jpeg';

const departments = [
  { name: 'Audit & Assurance',  total: '45+', icon: <ShieldCheck size={24} /> },
  { name: 'Tax & Regulatory',   total: '35+', icon: <Target size={24} /> },
  { name: 'Legal & Advocacy',   total: '20+', icon: <Briefcase size={24} /> },
  { name: 'Corporate Advisory', total: '25+', icon: <Users size={24} /> },
];

const teamMembers = [
  {
    name: 'Rohit Jain',
    designation: 'Managing Director',
    description: 'Mr Rohit Jain is a practicising Fellow Chartered Accountant and B. Com (Hons) Graduate from the Hansraj College, Delhi. He is the Managing Director of Inventiv Global Corporate Advisory and the Managing Partner of Rohit KC Jain & Co. With 20+ years of experience, his area of expertise is Income Tax & GST, specialising in Search and Seizure Matters.',
    image: rohitImg
  },
  {
    name: 'Arti Jain',
    designation: 'Executive Director',
    description: 'Mrs Arti Jain is a practising Advocate, MBA and B. Com (Hons) Graduate from the Shri Ram College of Commerce, Delhi. She is the Executive Director of Inventiv Global Corporate Advisory and a Partner in KC Jain & Co. Her area of expertise is Tax Litigation.',
    image: artiImg
  },
  {
    name: 'Ritesh Wahal',
    designation: 'Operational Head',
    description: 'Mr Ritesh Wahal is a practicising Fellow Chartered Accountant and a Commerce Graduate from Delhi University.',
    image: riteshImg
  }
];

const Team = () => {
  return (
    <motion.div
      className="section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── HERO ─────────────────────────────────── */}
      <div className="text-center mb-10">
        <h1 className="section-title">A Multi-Disciplinary Powerhouse</h1>
        <p className="section-subtitle">
          With a dedicated workforce of more than 125 professionals, our strength lies in
          the diverse expertise and collective integrity of our people.
        </p>
      </div>

      {/* ── DEPARTMENT STATS ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {departments.map((dept, idx) => (
          <motion.div
            key={idx}
            className="service-card text-center flex flex-col items-center p-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="bg-[var(--secondary-light)] p-3 rounded-xl mb-5 text-[var(--secondary)]">
              {dept.icon}
            </div>
            <h3 className="text-2xl text-[var(--primary)] mb-1">{dept.total}</h3>
            <p className="text-[var(--foreground-light)] font-medium text-sm">{dept.name}</p>
          </motion.div>
        ))}
      </div>

      {/* ── TALENT & LEADERSHIP ────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 bg-[var(--background-alt)] rounded-[20px] border border-[var(--border)] p-[clamp(2rem,5vw,3.5rem)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap size={36} className="text-[var(--secondary)]" />
            <h2 className="text-2xl mb-0">Specialized Talent Pool</h2>
          </div>
          <p className="mb-6 text-[var(--foreground-light)] leading-relaxed">
            Our team is a synergy of diverse talents, comprising seasoned experts dedicated
            to delivering excellence across every financial and legal touchpoint.
          </p>
          <ul className="list-none p-0">
            {[
              { label: 'Chartered Accountants', detail: 'Licensed experts in taxation, auditing, and corporate finance.' },
              { label: 'Advocates & LLMs',      detail: 'Legal specialists handling litigation and regulatory representation.' },
              { label: 'CS & Cost Accountants', detail: 'Professionals managing secretarial and cost-efficiency compliance.' },
              { label: 'MBAs & IT Consultants', detail: 'Driving management strategy and technological innovation.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 mb-3 text-[var(--foreground-light)]">
                <CheckCircle size={18} className="text-[var(--secondary)] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-[var(--foreground)]">{item.label}:</strong> {item.detail}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Award size={36} className="text-[var(--secondary)]" />
            <h2 className="text-2xl mb-0">Leadership Philosophy</h2>
          </div>
          <div className="service-card mb-4 border-l-4 border-l-[var(--secondary)]">
            <h4 className="text-[var(--primary)] mb-2">Founder &amp; Chairman</h4>
            <p className="text-[var(--foreground-light)] text-sm leading-relaxed">
              Leading with a visionary approach, our founding leadership has transformed
              the landscape of advisory services through decades of unwavering determination
              and innovation since 1961.
            </p>
          </div>
          <div className="service-card border-l-4 border-l-[var(--primary)]">
            <h4 className="text-[var(--primary)] mb-2">Executive Direction</h4>
            <p className="text-[var(--foreground-light)] text-sm leading-relaxed">
              Our management team focuses on driving technological excellence and operational
              efficiency, ensuring clients receive future-proof solutions in a dynamic
              regulatory environment.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── CORE LEADERSHIP TEAM ─────── */}
      <div className="text-center mb-10">
        <h2 className="section-title">Our Core Team</h2>
        <p className="section-subtitle">Meet the visionary leaders driving our success.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-[var(--border)] transition-all hover:shadow-2xl group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* PORTRAIT IMAGE BOX - Reduced height to crop the bottom half */}
            <div className="h-64 sm:h-50 w-full overflow-hidden relative bg-[var(--background-alt)] border-b border-[var(--border)]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top scale-125 origin-top transition-transform duration-500 group-hover:scale-[1.30]"
              />
            </div>
            
            {/* DETAILS BOX */}
            <div className="p-6 md:p-8 text-center flex flex-col flex-grow relative">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-1">{member.name}</h3>
              <p className="font-semibold text-sm mb-4 text-[var(--secondary)] uppercase tracking-wide">
                {member.designation}
              </p>

              <div className="w-16 h-px mx-auto mb-5 bg-[var(--secondary)] opacity-30"></div>

              <p className="text-[var(--foreground-light)] text-sm mb-6 flex-grow leading-relaxed">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── RKCJ APPROACH ────────────────────────── */}
      <div className="text-center mb-8">
        <h2 className="section-title">The RKCJ Approach</h2>
        <p className="section-subtitle">How our people deliver specialized solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Compass />, title: 'Deep Understanding',    desc: 'We invest significant time gaining profound insight into your specific business environment and unique industry hurdles.' },
          { icon: <Target />,  title: 'Holistic Strategy',     desc: 'We go beyond isolated transactions to offer a comprehensive, 360-degree view of your financial and regulatory health.' },
          { icon: <Handshake />, title: 'Effective Collaboration', desc: 'Working as an extension of your own team, we ensure seamless communication and exceptionally responsive service.' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="service-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="inline-flex bg-[var(--secondary-light)] p-3 rounded-xl mb-4 text-[var(--secondary)]">
              {item.icon}
            </div>
            <h3 className="mb-2">{item.title}</h3>
            <p className="text-[var(--foreground-light)] text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default Team;
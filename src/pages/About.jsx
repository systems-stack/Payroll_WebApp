import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Target, Eye, Users, MapPin,
  History, Globe, MonitorSmartphone
} from 'lucide-react';
import teamImage from '../assets/2.jpeg';

// Fix: "section container" on same element was fine structurally but caused
// extra vertical blank space when inner sub-sections also had mb-16/mt-16.
// All spacing now uses design-system tokens from index.css.

const About = () => {
  return (
    <motion.div
      className="section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── INTRO ──────────────────────────────────── */}
      <div className="text-center mb-10">
        <h1 className="section-title">Six Decades of Professional Excellence</h1>
        <p className="section-subtitle">
          The journey of Rohit KC Jain &amp; Co. (RKCJ) is rooted in a legacy of trust and
          expertise that dates back to the very origins of modern Indian taxation.
        </p>
      </div>

      {/* ── WHO WE ARE ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
        >
          <img
            src={teamImage}
            alt="Corporate Office"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h2 className="text-3xl mb-4">Who We Are</h2>
          <p className="mb-4 text-foreground-light">
            <strong>RKCJ</strong> is an independent Indian firm and a global leader in
            assurance, taxation, risk management, and financial advisory. Our professional
            approach is uniquely blended with a "personal touch," a philosophy that has
            earned us the enduring confidence of a diverse range of local and multinational
            clients.
          </p>
          <p className="mb-4 text-foreground-light">
            The firm's foundation was laid by pioneers Shri Ram Saran Das and Shri Dharam
            Pal Singh Jain, who established their practice in 1961 — the same year the
            landmark Income Tax Act was introduced in India. From its early beginnings in
            regional hubs like Bhiwani and Bikaner, the firm expanded its footprint to the
            national capital in 1969 under the leadership of Shri KC Jain.
          </p>
          <p className="text-foreground-light">
            Over the decades, we transitioned from a specialized tax practice into a
            multi-disciplinary powerhouse, formally evolving into a modern corporate
            advisory leader that now serves a global clientele.
          </p>
        </motion.div>
      </div>

      {/* ── PULLQUOTE ──────────────────────────────── */}
      <blockquote
        className="mb-10 p-6 rounded-xl"
        style={{
          background: 'var(--background-alt)',
          borderLeft: '4px solid var(--secondary)',
          color: 'var(--primary)',
          fontWeight: '600',
          fontSize: '1.05rem',
          lineHeight: '1.7'
        }}
      >
        With a dedicated workforce of more than 125 professionals, we operate through a
        robust network including a Head Office and six branch offices across four Indian
        states and two countries. Our team is a synergy of diverse talents, comprising
        Chartered Accountants, Advocates, MBAs, and other technically qualified experts.
      </blockquote>

      {/* ── VISION & VALUES ────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Eye size={36} color="var(--secondary)" />
            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Our Vision</h2>
          </div>
          <p className="text-foreground-light" style={{ lineHeight: '1.75' }}>
            We strive to nurture a professional firm of high repute that remains competitive,
            dynamic, and a focused industry leader. We are committed to providing growth
            opportunities for everyone associated with us while steadfastly serving our
            clients' best interests.
          </p>
          <p className="mt-4 font-semibold text-primary">"Quality is Priority"</p>
        </motion.div>

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Target size={36} color="var(--secondary)" />
            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Our Core Values</h2>
          </div>
          <ul className="list-none p-0">
            {[
              { label: 'Excellence & Integrity', detail: 'Maintaining the highest standards in every engagement.' },
              { label: 'Independence',           detail: 'Providing unbiased and objective professional opinions.' },
              { label: 'Commitment',             detail: 'Fostering a culture of mutual support and outstanding client value.' },
              { label: 'Diversity',              detail: 'Drawing strength from our rich cultural and professional diversity.' },
            ].map((v, i) => (
              <li key={i} className="flex gap-2 mb-3 text-foreground-light">
                <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong className="text-foreground">{v.label}:</strong> {v.detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── HISTORY ────────────────────────────────── */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="section-title">Our History</h2>
          <p className="section-subtitle">Legacy, growth, and the journey from 1961.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { year: '1961', title: 'The Inception',     desc: 'Established by Shri Ram Saran Das and Shri Dharam Pal Singh Jain, coinciding with the introduction of the Income Tax Act.' },
            { year: '1969', title: 'Expansion',          desc: 'Under Shri KC Jain, the firm expanded from Bhiwani and Bikaner to the national capital, Delhi.' },
            { year: '1990s', title: 'Diversification',  desc: 'Transitioned to a full-service consultancy catering to the growing needs of the manufacturing and banking sectors.' },
            { year: '2000s+', title: 'Modern Powerhouse', desc: 'Led by CA Rohit Jain, leveraging technology and a workforce of 125+ experts to serve clients globally.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="service-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <History size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
              <h3 className="text-2xl text-primary mb-1">{item.year}</h3>
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-foreground-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── OUR PEOPLE TEASER ──────────────────────── */}
      <div
        className="mb-12 px-6 py-12 text-center rounded-2xl"
        style={{ backgroundColor: 'var(--background-alt)', border: '1px solid var(--border)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          
          <h2 className="section-title mb-4">Driven by Experts, Defined by Integrity</h2>
          <p
            className="text-foreground-light mb-8"
            style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: '1.75' }}
          >
            At Rohit KC Jain &amp; Co., our greatest asset is our collective expertise.
            Our multi-disciplinary team of over 125 specialists works in synergy to navigate
            the complexities of global finance and taxation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/team" className="btn btn-secondary">
              Meet Our Specialists <Users size={16} style={{ marginLeft: '0.375rem' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Join Our Team
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── OUR PRESENCE ───────────────────────────── */}
      <div className="text-center mb-8">
        <h2 className="section-title">Our Presence</h2>
        <p className="section-subtitle">Reach, accessibility, and global footprint.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <MapPin size={36} color="var(--secondary)" />,
            title: 'National Reach',
            desc: 'We operate across 8 dedicated offices spanning 5 Indian states, ensuring our experts are accessible for face-to-face consultations and localized regulatory support.'
          },
          {
            icon: <Globe size={36} color="var(--secondary)" />,
            title: 'Global Footprint',
            desc: 'With a presence in 3 countries, we facilitate international business by providing specialized services in the UK, Singapore, Dubai, and the USA.'
          },
          {
            icon: <MonitorSmartphone size={36} color="var(--secondary)" />,
            title: 'Digital Accessibility',
            desc: 'Our 24/7 support framework and virtual CFO services ensure that our expertise is available to you regardless of physical location.'
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="service-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={{ margin: '0 auto 1rem' }}>{item.icon}</div>
            <h3 className="mb-2">{item.title}</h3>
            <p className="text-foreground-light text-sm" style={{ lineHeight: '1.65' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default About;
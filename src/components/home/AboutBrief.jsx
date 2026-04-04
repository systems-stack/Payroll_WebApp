import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from "../../assets/1.jpeg";

const AboutBrief = () => {
  return (
    <section className="section about-brief">
      <div className="container">

        {/* about-grid now has align-items: center in Home.css (was 'start') */}
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="Professional Accounting Team"
              className="about-image"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Removed redundant items-center class — about-grid handles alignment */}
            <h2
              className="section-title"
              style={{ textAlign: 'left', marginBottom: '1.25rem', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Building Trust with Precision &amp; Integrity
            </h2>
            <p className="mb-6 text-foreground-light" style={{ lineHeight: '1.75' }}>
              Rooted in a legacy of trust since the 1961 inception of the Indian Income Tax Act,
              Rohit KC Jain &amp; Co. (RKCJ) was founded by pioneers Shri Ram Saran Das and Shri
              Dharam Pal Singh Jain. Over six decades, the firm has transitioned from a specialized
              tax practice into a multi-disciplinary powerhouse under the visionary leadership of
              Shri KC Jain and CA Rohit Jain.
            </p>
            <p className="mb-8 text-foreground-light" style={{ lineHeight: '1.75' }}>
              Today, with a dedicated team of 125+ professionals and a track record of 53,000+
              successful cases, RKCJ combines institutional wisdom with modern innovation across
              India and global hubs like the UK, UAE, and Singapore. Guided by our founding
              philosophy, <em>"Quality is Priority,"</em> we provide comprehensive financial and
              legal strategies built on precision, integrity, and a personal touch.
            </p>
            <Link to="/about" className="btn btn-primary">
              Explore Our Vision <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Feature pillars — mt-12 gives consistent breathing room below the image/text pair */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6">
            <ShieldCheck className="text-secondary mb-4" size={40} />
            <h4 className="text-xl text-primary font-bold mb-2">Trusted Over Decades</h4>
            <p className="text-foreground-light text-sm">
              Serving individuals, startups, SMEs, and corporates with uncompromised integrity.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Target className="text-secondary mb-4" size={40} />
            <h4 className="text-xl text-primary font-bold mb-2">Result-Oriented Solutions</h4>
            <p className="text-foreground-light text-sm">
              Understanding evolving business needs to provide customized strategies that support growth.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <TrendingUp className="text-secondary mb-4" size={40} />
            <h4 className="text-xl text-primary font-bold mb-2">Consistent Value</h4>
            <p className="text-foreground-light text-sm">
              We don't just provide services — we build long-term relationships based on transparency.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBrief;
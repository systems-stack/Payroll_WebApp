import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Briefcase, Shield, Rocket } from 'lucide-react';

const serviceCategories = [
  {
    icon: <Calculator size={32} />,
    title: 'Core Tax & Regulatory Services',
    desc: 'Strategic tax planning and strict adherence to the latest regulations, ensuring individuals and corporations remain compliant across national and international boundaries.',
    items: [
      { name: 'Income Tax', detail: 'Strategic tax planning to optimize credits and deductions, ensuring compliance with the latest Finance Act amendments.' },
      { name: 'International Taxation', detail: 'Navigating Transfer Pricing (fair pricing between global branches) and applying Tax Treaties to prevent double taxation.' },
      { name: 'Goods & Services Tax (GST)', detail: 'Comprehensive indirect tax service including registration, input tax credit reconciliation, and representation during audits.' },
      { name: 'FEMA', detail: 'Ensuring movement of money in or out of India (Remittances, FDI, ECB) follows RBI guidelines strictly.' },
      { name: 'Black Money & Tax Act', detail: 'Specialist advisory for disclosing foreign assets and compliance regarding strict transparency laws.' }
    ]
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Corporate Strategy & Governance',
    desc: 'High-level advisory services focusing on business combinations, rigorous due diligence, and maintaining essential corporate compliance.',
    items: [
      { name: 'Company Law Matters', detail: 'Drafting board resolutions, managing share transfers, and ensuring "Active" status with the ROC.' },
      { name: 'Mergers & Acquisitions (M&A)', detail: 'End-to-end management of business combinations including valuation, negotiation, and drafting legal schemes.' },
      { name: 'Due Diligence', detail: 'Rigorous pre-purchase investigation verifying financial stability, litigations, and hidden liabilities.' },
      { name: 'Secretarial & SEBI Services', detail: 'Ensuring strict adherence to LODR and capital market regulations for public or listed entities.' }
    ]
  },
  {
    icon: <Shield size={32} />,
    title: 'Investigation & Specialized Audits',
    desc: 'Objective validations of financial health and specialized audits utilizing investigative techniques to uncover discrepancies and ensure lawful operations.',
    items: [
      { name: 'Auditing & Assurance', detail: 'Objective validation of financial statements providing reasonable assurance for stakeholders like banks.' },
      { name: 'Forensic Audit Services', detail: 'Combining accounting skills with investigative techniques to uncover embezzlement or provide evidence.' },
      { name: 'Benami Property & PMLA', detail: 'Specialized legal services for defending or regularizing transactions flagged under the Prevention of Money Laundering Act.' }
    ]
  },
  {
    icon: <Rocket size={32} />,
    title: 'Business Growth & Operations',
    desc: 'Cradle-to-grave support for businesses, ensuring operational smoothness, IP protection, and soft landings for foreign investments.',
    items: [
      { name: 'Startup Services', detail: 'Cradle-to-grave support from legal structure selection (LLP vs. Pvt Ltd) to obtaining DPIIT recognition.' },
      { name: 'Societies and Trust (NGO)', detail: 'Helping non-profits secure legal identity and 12A/80G certifications for tax-free operations.' },
      { name: 'Import-Export & SEZ', detail: 'Securing IEC and setting up SEZ units to enjoy zero-rated taxes and customs duty exemptions.' },
      { name: 'Trademarks', detail: 'Protecting brand identity through availability searches and application filing.' },
      { name: 'Accounting & BPO', detail: 'Outsourcing back-office workload with real-time financial records using modern software.' },
      { name: 'NRIs & Foreign Investment', detail: 'A soft landing for foreign capital advising on entry routes and ensuring proper exit documentation.' }
    ]
  }
];

const Services = () => {
  return (
    <motion.div 
      className="section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-10">
        <h1 className="section-title">Comprehensive Financial Services</h1>
        <p className="section-subtitle">
          Explore our wide range of professional services built on complex problem solving and strategic advisory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-md">
        {serviceCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="service-icon mb-0">{category.icon}</div>
              <h2 className="text-xl mb-0">{category.title}</h2>
            </div>
            <p className="text-foreground-light mb-6 font-medium">
              {category.desc}
            </p>
            <ul className="list-none p-0">
              {category.items.map((item, i) => (
                <li key={i} className="flex gap-2 mb-4 text-foreground-light text-sm">
                  <div className="mt-2 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{item.name}:</strong> {item.detail}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
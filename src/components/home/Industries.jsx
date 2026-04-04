import React from 'react';

// Row 1
import img1 from '../../assets/Client Logos/1.png';
import img2 from '../../assets/Client Logos/2.png';
import img3 from '../../assets/Client Logos/3.png';
import img4 from '../../assets/Client Logos/4.png';
import img5 from '../../assets/Client Logos/5.png';
import img6 from '../../assets/Client Logos/6.png';
import img7 from '../../assets/Client Logos/7.png';
import img8 from '../../assets/Client Logos/8.png';
import img9 from '../../assets/Client Logos/9.png';
import img10 from '../../assets/Client Logos/10.png';
import img11 from '../../assets/Client Logos/11.png';
import img12 from '../../assets/Client Logos/12.png';
import img13 from '../../assets/Client Logos/13.png';
import img14 from '../../assets/Client Logos/14.png';

// Row 2
import img15 from '../../assets/Client Logos/15.png';
import img16 from '../../assets/Client Logos/16.png';
import img17 from '../../assets/Client Logos/17.png';
import img18 from '../../assets/Client Logos/18.png';
import img19 from '../../assets/Client Logos/19.png';
import img20 from '../../assets/Client Logos/20.png';
import img21 from '../../assets/Client Logos/21.png';
import img22 from '../../assets/Client Logos/22.png';
import img23 from '../../assets/Client Logos/23.png';
import img24 from '../../assets/Client Logos/24.png';
import img25 from '../../assets/Client Logos/25.png';
import img26 from '../../assets/Client Logos/26.png';
import img27 from '../../assets/Client Logos/27.png';
import img28 from '../../assets/Client Logos/28.png';

const clientsRow1 = [
  { id: 1,  imgUrl: img1,  alt: 'Acadally' },
  { id: 2,  imgUrl: img2,  alt: 'Action Vector' },
  { id: 3,  imgUrl: img3,  alt: 'Advancells' },
  { id: 4,  imgUrl: img4,  alt: 'Ashoka University' },
  { id: 5,  imgUrl: img5,  alt: 'Bank of India' },
  { id: 6,  imgUrl: img6,  alt: 'Bharat Express' },
  { id: 7,  imgUrl: img7,  alt: 'BLB' },
  { id: 8,  imgUrl: img8,  alt: 'Burj Noida' },
  { id: 9,  imgUrl: img9,  alt: 'Central Bank' },
  { id: 10, imgUrl: img10, alt: 'Dasnac' },
  { id: 11, imgUrl: img11, alt: 'DPS' },
  { id: 12, imgUrl: img12, alt: 'Ganesh' },
  { id: 13, imgUrl: img13, alt: 'Gurgaon Bank' },
  { id: 14, imgUrl: img14, alt: 'Haldirams' },
];

const clientsRow2 = [
  { id: 15, imgUrl: img15, alt: 'India Food Banking' },
  { id: 16, imgUrl: img16, alt: 'Ishan Metals' },
  { id: 17, imgUrl: img17, alt: 'J&K Forest' },
  { id: 18, imgUrl: img18, alt: 'JKDC' },
  { id: 19, imgUrl: img19, alt: 'JTB' },
  { id: 20, imgUrl: img20, alt: 'Kumardeep' },
  { id: 21, imgUrl: img21, alt: 'Lanexis' },
  { id: 22, imgUrl: img22, alt: 'Lemitt' },
  { id: 23, imgUrl: img23, alt: 'LML' },
  { id: 24, imgUrl: img24, alt: 'NISE' },
  { id: 25, imgUrl: img25, alt: 'P P Jewellers' },
  { id: 26, imgUrl: img26, alt: 'Pickmywork' },
  { id: 27, imgUrl: img27, alt: 'PNB' },
  { id: 28, imgUrl: img28, alt: 'RCM' },
];

const Industries = () => {
  return (
    <>
      {/* ── STATS SECTION ─────────────────────────────────────────────
          Removed inline paddingBottom override — section padding is now
          controlled by a modifier class to keep spacing consistent.    */}
      <section className="section bg-background industries-stats">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title mb-2">Clients &amp; Industries</h2>
            <p className="section-subtitle">
              Trust, industry diversity, and long-term partnerships.
            </p>
          </div>

          <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <p className="text-foreground-light text-lg mb-8" style={{ lineHeight: '1.75' }}>
              Our clients are the cornerstone of our success. We serve a vast and diverse
              portfolio, ranging from large multinational corporations and public sector
              undertakings to emerging startups and high-net-worth individuals.
            </p>

            <div className="flex justify-center gap-12 flex-wrap mb-8">
              <div className="text-center">
                <h3 className="text-5xl text-secondary font-bold mb-2">12,000+</h3>
                <p className="font-semibold text-lg text-primary">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl text-secondary font-bold mb-2">53,000+</h3>
                <p className="font-semibold text-lg text-primary">Cases Completed</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary">
              We pride ourselves on building lasting partnerships based on transparency and results.
            </h3>
          </div>
        </div>
      </section>

      {/* ── LOGO SLIDERS ──────────────────────────────────────────────
          overflow:hidden on body prevents horizontal scroll.
          Removed inline padding overrides — use dedicated CSS class.  */}
      <section className="bg-alt industries-logos">
        {/* Row 1 — left to right */}
        <div className="logo-slider-container mb-4">
          <div className="logo-track">
            {clientsRow1.map((c) => (
              <div key={`r1a-${c.id}`} className="client-logo-box">
                <img src={c.imgUrl} alt={c.alt} className="client-img" />
              </div>
            ))}
            {/* Duplicate set for seamless infinite loop */}
            {clientsRow1.map((c) => (
              <div key={`r1b-${c.id}`} className="client-logo-box">
                <img src={c.imgUrl} alt={c.alt} className="client-img" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="logo-slider-container">
          <div className="logo-track reverse">
            {clientsRow2.map((c) => (
              <div key={`r2a-${c.id}`} className="client-logo-box">
                <img src={c.imgUrl} alt={c.alt} className="client-img" />
              </div>
            ))}
            {clientsRow2.map((c) => (
              <div key={`r2b-${c.id}`} className="client-logo-box">
                <img src={c.imgUrl} alt={c.alt} className="client-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
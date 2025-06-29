import React from 'react';
import { motion } from 'framer-motion';
import CounterSection from './CounterSection';

const AboutPage = () => {
  const services = [
    { id: '01', title: 'Organic Food Services', desc: 'Fresh, organic produce...', icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/01.svg' },
    { id: '02', title: 'Fast Delivery System', desc: 'Reliable and fast delivery...', icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/02.svg' },
    { id: '03', title: 'Fresh Grocery Everyday', desc: 'A daily restock...', icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg' },
    { id: '04', title: '24/7 Customer Support', desc: 'Our team is here for you...', icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg' },
  ];

  const feedbacks = [
    { name: 'Sarah Johnson', role: 'Sales Executive', message: '“Amazing experience...”', leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png' },
    { name: 'Michael Brown', role: 'Retailer', message: '“Very easy to use...”', leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png' },
  ];

  const teamMembers = [
    { name: 'Samuel Alexander', role: 'Design Director', img: 'https://ekomart-nextjs.vercel.app/assets/images/team/01.jpg' },
    { name: 'Isabella Charlotte', role: 'Marketing Head', img: 'https://ekomart-nextjs.vercel.app/assets/images/team/02.jpg' },
  ];

  const partnerLogos = [
    'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
    'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
    'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
    'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
  ];

  return (
    <div className="about-page">
      {/* Our Mission Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3 display-5">Our Mission</h2>
          <p className="text-muted fs-5 mb-4 mx-auto" style={{ maxWidth: '800px' }}>
            At MegaMartX, our mission is to deliver fresh, affordable, and high-quality groceries directly to your doorstep.
            We believe in creating a healthy, accessible, and sustainable shopping experience for everyone.
          </p>
          <motion.img
            src="https://imgs.search.brave.com/3ffyBzb9h91LQ5iV9NKMl47pMv26cz9apo9-KB7ZWpg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZWNvbW1lcmNl/LW9ubGluZS1zaG9w/cGluZy12ZWN0b3It/aWxsdXN0cmF0aW9u/XzY3NzE3OS05My5q/cGc_c2VtdD1haXNf/aXRlbXNfYm9vc3Rl/ZCZ3PTc0MA"
            alt="mission"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-5">Our Trusted Partners</h2>
          <div className="row justify-content-center align-items-center g-4">
            {partnerLogos.map((logo, i) => (
              <div className="col-6 col-sm-3" key={i}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-3 rounded shadow-sm"
                >
                  <img
                    src={logo}
                    alt={`Partner ${i}`}
                    className="img-fluid"
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-2 display-5">Why Choose Us?</h2>
          <p className="text-muted mb-4">We bring unmatched value to your doorstep</p>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0px 12px 24px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white rounded h-100 shadow-sm"
                >
                  <img src={service.icon} alt={service.title} style={{ width: '50px' }} />
                  <h5 className="fw-bold mt-3">{service.title}</h5>
                  <p className="text-muted">{service.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2 display-5">Meet Our Expert Team</h2>
          <p className="text-muted mb-4">The people behind our success</p>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-3 bg-white rounded shadow-sm text-center h-100"
                >
                  <img src={member.img} alt={member.name} className="img-fluid rounded mb-3" />
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-2 display-5">What Our Customers Say</h2>
          <p className="text-muted mb-5">Thousands of happy customers share their experience</p>
          <div className="row g-4">
            {feedbacks.map((fb, index) => (
              <div className="col-12 col-md-6" key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="p-4 bg-white rounded shadow-sm text-start h-100"
                >
                  <div className="d-flex align-items-center mb-3">
                    <img src={fb.leftImage} alt={fb.name} className="rounded-circle" width="60" height="60" />
                    <div className="ms-3">
                      <h6 className="fw-bold mb-0">{fb.name}</h6>
                      <small className="text-muted">{fb.role}</small>
                    </div>
                  </div>
                  <p className="text-dark mb-0"><i className="fa fa-quote-left text-success me-2"></i>{fb.message}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

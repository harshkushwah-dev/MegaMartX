import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMain = () => {
  const locations = [
    {
      title: 'Mumbai Head Office',
      address: '401 MegaMartX Tower, Andheri East, Mumbai, MH 400069',
      phone: '+91 88791 45630',
      email: 'mumbai@megamartx.com',
    },
    {
      title: 'Bangalore Warehouse',
      address: 'Plot 16, Industrial Layout, Whitefield, Bangalore, KA 560066',
      phone: '+91 98860 21458',
      email: 'bangalore@megamartx.com',
    },
  ];

  return (
    <div className="contact-main">
      {/* Contact Banner */}
      <div
        style={{
          backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/contact/01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
          color: '#fff',
          animation: 'fadeInUp 1.2s ease forwards',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Ask Us A Question</h1>
          <p className="lead" style={{ maxWidth: '700px', margin: '10px auto' }}>
            We’re happy to help with anything! Reach out via the form or our locations.
          </p>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="py-5 bg-light" style={{ animation: 'fadeInUp 1.4s ease forwards' }}>
        <div className="container">
          <div className="row g-5">
            {/* Left Info */}
            <div className="col-lg-4">
              <h2 className="fw-bold mb-3">Visit or Reach Out to Us</h2>
              <p className="text-muted mb-4">
                We’d love to hear from you. Find our nearest location or drop us a line.
              </p>

              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded shadow-sm bg-white mb-4 hover-scale-card"
                  style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(40, 167, 69, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  <h5 className="text-success fw-bold mb-2">
                    <FaMapMarkerAlt className="me-2 text-muted" /> {loc.title}
                  </h5>
                  <p className="text-muted small mb-1">{loc.address}</p>
                  <p className="small mb-1">
                    <FaPhoneAlt className="me-2 text-success" />{' '}
                    <a href={`tel:${loc.phone}`} className="text-primary text-decoration-none">
                      {loc.phone}
                    </a>
                  </p>
                  <p className="small mb-0">
                    <FaEnvelope className="me-2 text-success" />{' '}
                    <a href={`mailto:${loc.email}`} className="text-dark text-decoration-none">
                      {loc.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="col-lg-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716725338558!5m2!1sen!2sbd"
                width="100%"
                height="540"
                style={{
                  border: '4px solid #28a745',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  animation: 'fadeInUp 1.6s ease forwards',
                }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pb-5" style={{ animation: 'fadeInUp 1.8s ease forwards' }}>
        <div className="container">
          <div className="bg-white rounded p-5 shadow-sm">
            <div className="row align-items-center">
              {/* Form */}
              <div className="col-lg-7">
                <h3 className="fw-bold mb-4">Fill Out The Form Below</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="form-control"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Your Email*"
                        className="form-control"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <select className="form-select" style={inputStyle}>
                      <option value="">Select Subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      placeholder="Your Message..."
                      rows="5"
                      className="form-control"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success px-4 py-2 fw-semibold"
                    style={{ transition: 'background-color 0.3s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Image */}
              <div className="col-lg-5 mt-4 mt-lg-0 text-center">
                <img
                  src="https://ekomart-nextjs.vercel.app/assets/images/contact/02.jpg"
                  alt="Contact"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-scale-card {
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .hover-scale-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(40, 167, 69, 0.3);
        }
      `}</style>
    </div>
  );
};

const inputStyle = {
  padding: '12px 16px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '15px',
  width: '100%',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};

function handleFocus(e) {
  e.target.style.borderColor = '#28a745';
  e.target.style.boxShadow = '0 0 5px #28a745';
}
function handleBlur(e) {
  e.target.style.borderColor = '#ccc';
  e.target.style.boxShadow = 'none';
}

export default ContactMain;

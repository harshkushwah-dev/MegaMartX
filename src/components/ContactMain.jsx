import React from 'react';

const ContactMain = () => {
  const cardHoverStyle = {
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  };

  return (
    <div className="demo-one">
      {/* Contact Banner */}
      <div
        style={{
          backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/contact/01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '42px', fontWeight: 'bold' }}>Ask Us A Question</h1>
          <p style={{ maxWidth: '700px', margin: '10px auto', fontSize: '16px', lineHeight: '1.6' }}>
            We’re happy to help with anything! Reach out via the form or our locations.
          </p>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {/* Left Info */}
            <div className="col-lg-4">
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                You can ask us questions!
              </h2>
              <p style={{ fontSize: '15px', color: '#555', marginBottom: '30px' }}>
                Connect with us directly at any of our local stores or drop a message anytime.
              </p>

              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className="location-single-card"
                  style={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <h4 style={{ marginBottom: '5px', color: '#28a745' }}>
                    {idx === 0 ? 'Berlin Germany Store' : 'Frankfurt Germany Store'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    259 Daniel Road, FKT 2589 Berlin, Germany.
                  </p>
                  <a href="#" style={{ display: 'block', color: '#007bff', marginTop: '5px' }}>
                    +856 (76) 259 6328
                  </a>
                  <a href="#" style={{ display: 'block', color: '#007bff' }}>
                    info@example.com
                  </a>
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
      <div style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div
            style={{
              background: '#f9f9f9',
              borderRadius: '12px',
              padding: '40px 30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div className="row align-items-center">
              {/* Form */}
              <div className="col-lg-7">
                <h3 style={{ fontSize: '26px', fontWeight: '600', marginBottom: '30px' }}>
                  Fill Out The Form Below
                </h3>
                <form>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <input
                      type="email"
                      placeholder="Your Email*"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <select style={{ ...inputStyle, width: '100%' }}>
                    <option value="">Select Subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  <textarea
                    placeholder="Your Message..."
                    rows="5"
                    style={{ ...inputStyle, width: '100%', marginTop: '15px' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  ></textarea>
                  <button
                    type="submit"
                    style={{
                      marginTop: '20px',
                      padding: '12px 25px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
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
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for input fields
const inputStyle = {
  padding: '10px 15px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '14px',
  width: '100%',
  transition: 'border-color 0.3s',
};

function handleFocus(e) {
  e.target.style.borderColor = '#28a745';
}
function handleBlur(e) {
  e.target.style.borderColor = '#ccc';
}

export default ContactMain;

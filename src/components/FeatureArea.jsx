import React from 'react';

const features = [
  {
    iconColor: "#629D23",
    title: "Wide Assortment",
    subtitle: "Orders $50 or more",
  },
  {
    iconColor: "#f39c12",
    title: "Fast Delivery",
    subtitle: "Same-day dispatch",
  },
  {
    iconColor: "#3498db",
    title: "Secure Payment",
    subtitle: "100% protected",
  },
  {
    iconColor: "#9b59b6",
    title: "Easy Returns",
    subtitle: "Within 7 days",
  },

];

const FeatureArea = () => {
  return (
    <div className="rts-feature-area rts-section-gap" style={{ backgroundColor: '#f8f8f8', padding: '40px 0' }}>
      <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-feature-area" style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}>
                <div className="icon" style={{ marginBottom: '15px' }}>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="21.5" r="21.5" fill={feature.iconColor} />
                    <path d="M22.8 20.2H20.1C18.6 20.2 17.4 19 17.4 17.5C17.4 15.9 18.6 14.7 20.1 14.7H25.5C26.2 14.7 26.8 14.1 26.8 13.4C26.8 12.7 26.2 12.1 25.5 12.1H22.8V9.4C22.8 8.7 22.2 8.1 21.5 8.1C20.8 8.1 20.2 8.7 20.2 9.4V12.1H20.1C17.2 12.1 14.8 14.5 14.8 17.5C14.8 20.4 17.2 22.8 20.1 22.8H22.8C24.4 22.8 25.6 24 25.6 25.5C25.6 27.1 24.4 28.3 22.8 28.3H17.5C16.8 28.3 16.2 28.9 16.2 29.6C16.2 30.3 16.8 30.9 17.5 30.9H20.2V33.6C20.2 34.3 20.8 34.9 21.5 34.9C22.2 34.9 22.8 34.3 22.8 33.6V30.9H22.9C25.8 30.9 28.2 28.5 28.2 25.5C28.2 22.6 25.8 20.2 22.8 20.2Z" fill="#fff"/>
                  </svg>
                </div>
                <div className="content">
                  <h4 className="title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px' }}>{feature.title}</h4>
                  <span style={{ fontSize: '13px', color: '#777' }}>{feature.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;

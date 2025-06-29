import React from "react";
import bgImage from "../assets/01.jpg";

const categories = [
  {
    bg: bgImage,
    title: "Drink Fresh Corn Juice",
    subtitle: "Good Taste",
    link: "/shop",
  },
  {
    bg: "https://t4.ftcdn.net/jpg/03/80/72/07/240_F_380720787_Ain6UfNeBiRmq6FSdIqvUHwcpxBlcUNc.jpg",
    title: "Organic Lemon Flavored",
    subtitle: "Banana Chips",
    link: "/shop",
  },
  {
    bg: "https://t4.ftcdn.net/jpg/13/92/41/73/240_F_1392417398_3GDOcTgUKwuMrCyHEoq3xXkV2uX7OI20.jpg",
    title: "Nozes Pecanera Brasil",
    subtitle: "Chocolate Snacks",
    link: "/shop",
  },
  {
    bg: "https://t4.ftcdn.net/jpg/02/27/60/33/240_F_227603351_JWbbWxm4XAQfg4llIw1VhkPVLtOZuvQ3.jpg",
    title: "Strawberry Water Drinks",
    subtitle: "Flavors Awesome",
    link: "/shop",
  },
];

const CategoryFeatureArea = () => {
  return (
    <>
      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }

        .section-header h5 {
          color: #28a745;
          font-size: 30px;
          font-weight: 500;
          margin-top: 10px;
        }

        .section-header p {
          color: #555;
          font-size: 14px;
          max-width: 600px;
          margin: 10px auto 0;
        }

        .single-feature-card {
          height: 400px;
          border-radius: 16px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .single-feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0,0,0,0.2));
          z-index: 1;
        }

        .single-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .content-area {
          position: relative;
          z-index: 2;
          color: white;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 25px 25px 30px;
        }

        .badge-top {
          align-self: flex-start;
          background-color: #ffc107;
          color: #212529;
          font-weight: 600;
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 6px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.2);
        }

        .bottom-content {
          margin-top: auto;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .title span {
          display: block;
          font-size: 16px;
          font-weight: 400;
          color: #ddd;
          margin-top: 4px;
        }

        .shop-btn {
          background-color: #28a745;
          color: #fff;
          border: none;
          padding: 10px 22px;
          font-weight: 600;
          font-size: 14px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          margin-top: 20px;
        }

        .shop-btn:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 20px;
          }

          .section-header h2 {
            font-size: 24px;
          }

          .content-area {
            padding: 20px;
          }
        }
      `}</style>

      <div className="category-feature-area rts-section-gapTop">
        <div className="container">
          {/* Section Heading */}
          <div className="section-header">
            <h2>Hot Selling Categories</h2>
            <h5>Explore Our Top Picks</h5>
            <p>Discover our best-selling categories, filled with fresh, organic, and flavorful items just for you.</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {categories.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div
                  className="single-feature-card"
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  <div className="content-area">
                    <div className="badge-top">Weekend Discount</div>
                    <div className="bottom-content">
                      <h3 className="title" style={{color:'#fff'}} >
                        {item.title}
                        <span>{item.subtitle}</span>
                      </h3>
                      <a href={item.link} className="shop-btn">
                        Shop Now <i className="fa-sharp fa-regular fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFeatureArea;

import React from "react";

const LatestBlogPosts = () => {
  return (
    <div className="blog-area-start rts-section-gapBottom">
      <style>{`
        .blog-title {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .single-blog-area-start {
          background-color: #fff;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          text-decoration: none;
        }

        .single-blog-area-start:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .single-blog-area-start img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }

        .blog-body {
          padding: 15px 20px;
        }

        .top-area {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 14px;
          color: #888;
          margin-bottom: 10px;
        }

        .single-meta {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .title {
          font-size: 18px;
          font-weight: 600;
          color: #222;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .title:hover {
          color: #28a745;
        }

        .shop-now-goshop-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #28a745;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .shop-now-goshop-btn:hover {
          color: #1e7e34;
        }

        .plus-icon i {
          font-size: 12px;
        }

        a {
          text-decoration: none !important;
        }

        @media (max-width: 768px) {
          .blog-title {
            text-align: center;
          }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="blog-title" style={{ padding: "0 15px" }}>
              Latest Blog Post Insights
            </h2>
          </div>
        </div>

        {/* Main Blog Grid */}
        <div className="row g-4" style={{ padding: "0 15px" }}>
          {[
            {
              img: "https://www.aces.edu/wp-content/uploads/2023/02/shutterstock_795233002-scaled.jpg",
              title: "Shion Fixation: Fueling Your Passion for All Things Stylish",
              date: "15 Sep, 2023",
              category: "Modern Fashion",
              link: "/blog/Shion-Fixation-Fueling-Your-Passion-for-All-Things-Stylish",
            },
            {
              img: "https://t3.ftcdn.net/jpg/13/89/72/38/240_F_1389723821_Teu76ge7cYGZxVsuMawuCOcVW657A43O.jpg",
              title: "Ashion Fixation: Fueling Your Passion for All Things Stylish",
              date: "15 Sep, 2023",
              category: "Modern Fashion",
              link: "/blog/ashion-fixation-fueling-your-passion-for-all-things-stylish",
            },
            {
              img: "https://t4.ftcdn.net/jpg/13/05/35/63/240_F_1305356352_LkjfmO2F6urPXkK2Q7oWp8wWlHCYyzAy.jpg",
              title: "Fixation: Fueling Your Passion for All Things Stylish",
              date: "15 Sep, 2023",
              category: "Modern Fashion",
              link: "/blog/fixation-fueling-your-passion-for-all-things-stylish",
            },
            {
              img: "https://t4.ftcdn.net/jpg/08/27/81/11/240_F_827811165_kQCovDxioxQ8DvlEjvSYaL0TdOFzgVH2.jpg",
              title: "Fashion Fixation: Fueling Your Passion for All Things Stylish",
              date: "15 Sep, 2023",
              category: "Modern Fashion",
              link: "/blog/fashion-fixation-fueling-your-passion-for-all-things-stylish",
            },
          ].map((post, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="single-blog-area-start">
                <a href={post.link} className="thumbnail">
                  <img src={post.img} alt="blog" />
                </a>
                <div className="blog-body">
                  <div className="top-area">
                    <div className="single-meta">
                      <i className="fa-light fa-clock"></i>
                      <span>{post.date}</span>
                    </div>
                    <div className="single-meta">
                      <i className="fa-regular fa-folder"></i>
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <a href={post.link}>
                    <h4 className="title">{post.title}</h4>
                  </a>
                  <a href={post.link} className="shop-now-goshop-btn">
                    <span className="text">Read Details</span>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editor's Pick Section */}
        <div className="row mt-5" style={{ padding: "0 15px" }}>
          <div className="col-lg-12">
            <h3 className="blog-title" style={{ fontSize: '22px', marginBottom: '25px' }}>
              🌟 Editor's Pick
            </h3>
          </div>

          {[
            {
              img: "https://imgs.search.brave.com/GSpzQyxcOHDDW1fUCU5PFT6oATOenxGxj6dWX6gU7e4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZXJpY2Fi/YWxsc3R5bGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA4L2hvbWUtaGVy/by0xLnBuZz9yZXNp/emU9MTAyNCw0ODEm/c3NsPTE",
              title: "Top Tips for Styling with Confidence in 2024",
              link: "/blog/top-tips-for-styling-with-confidence-2024",
              desc: "Discover how to elevate your fashion game with our expert tips tailored for 2024 trends."
            },
            {
              img: "https://imgs.search.brave.com/YYWh8dT-RjwSrT2OcxuzRFyWLXn1Jo9XLs0JIhqAhyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3do/b3doYXR3ZWFyL3Bv/c3RzLzI4NzI4NC9u/YXR1cmFsLXNraW5j/YXJlLXJvdXRpbmUt/Mjg3Mjg0LTE1ODk1/ODI4MDk0MjYtbWFp/bi5naWY.jpeg",
              title: "The Best Organic Skincare Routines",
              link: "/blog/the-best-organic-skincare-routines",
              desc: "Your skin deserves the best. Learn how to switch to natural and organic skincare routines."
            }
          ].map((post, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <a href={post.link}>
                  <img
                    src={post.img}
                    alt="featured-blog"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </a>
                <div style={{ padding: "15px 20px" }}>
                  <a href={post.link}>
                    <h4 style={{ fontSize: "18px", color: "#222", fontWeight: "600", marginBottom: "10px" }}>
                      {post.title}
                    </h4>
                  </a>
                  <p style={{ fontSize: "14px", color: "#555" }}>{post.desc}</p>
                  <a href={post.link} style={{ fontSize: "14px", color: "#28a745", fontWeight: 500 }}>
                    Read More <i className="fa fa-arrow-right" style={{ marginLeft: "6px" }}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Section */}
        <div
          className="newsletter-area mt-5"
          style={{
            padding: "40px 25px",
            borderRadius: "12px",
            backgroundColor: "#28a745",
            textAlign: "center",
            color: "#fff",
            marginTop: "60px",
          }}
        >
          <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>📰 Subscribe to Our Blog Updates</h3>
          <p style={{ marginBottom: "25px", fontSize: "16px", opacity: 0.9 }}>
            Get the latest blog posts and exclusive tips directly in your inbox.
          </p>
          <form style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                width: "260px",
                maxWidth: "100%",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#fff",
                color: "#28a745",
                borderRadius: "6px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;

import React from 'react';
import LatestBlogPosts from './LatestBlogPosts';

const BlogMain = () => {
  return (
    <div
      className="blog-sidebar-area rts-section-gap"
      style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="theiaStickySidebar" style={{ position: 'sticky', top: '100px' }}>
              {/* Search Box */}
              <div
                className="blog-sidebar-widget"
                style={{
                  marginBottom: '30px',
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                }}
              >
                <form action="#" style={{ display: 'flex' }}>
                  <input
                    type="text"
                    placeholder="Search Here..."
                    style={{
                      flex: 1,
                      padding: '10px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '8px 0 0 8px',
                      outline: 'none',
                    }}
                  />
                  <button
                    style={{
                      padding: '0 15px',
                      backgroundColor: '#28a745',
                      border: 'none',
                      borderRadius: '0 8px 8px 0',
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div
                className="blog-sidebar-widget"
                style={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  marginBottom: '30px',
                }}
              >
                <h4 className="title" style={{ fontSize: '18px', marginBottom: '20px' }}>
                  📂 Categories
                </h4>
                <div className="category-main-wrapper">
                  {[
                    "Baking Material", "Bread and Juice", "Clothing & Beauty",
                    "Fresh Vegetable", "Fresh Seafood", "Milks and Daires", "Wine & Drinks"
                  ].map((category, i) => (
                    <div
                      className="single-category-area"
                      key={i}
                      style={{
                        padding: '10px 0',
                        borderBottom: '1px solid #eee',
                        cursor: 'pointer',
                        fontSize: '15px',
                        color: '#333',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#28a745')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                className="blog-sidebar-widget"
                style={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  marginBottom: '30px',
                }}
              >
                <h4 className="title" style={{ fontSize: '18px', marginBottom: '20px' }}>
                  🏷️ Tags
                </h4>
                <div
                  className="tags-area"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
                >
                  {["Shampoo", "Butter", "Birthday", "Gifts", "Facial", "Green", "Lotion", "Scrub"].map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        border: '1px solid #ccc',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        backgroundColor: '#fff',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#28a745';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.border = '1px solid #28a745';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.border = '1px solid #ccc';
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Banner */}
              <div
                className="blog-sidebar-widget"
                style={{
                  backgroundImage: `url(https://ekomart-nextjs.vercel.app/assets/images/blog/thumb/12.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  padding: '40px 25px',
                  color: '#fff',
                  textAlign: 'center',
                  minHeight: '250px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: '14px', opacity: 0.9 }}>🔥 Weekend Discount</span>
                <h5 style={{ fontSize: '20px', margin: '10px 0' }}>
                  Discover Real Organic <br />
                  <strong>Flavors Vegetable</strong>
                </h5>
                <a
                  href="#"
                  style={{
                    marginTop: '15px',
                    display: 'inline-block',
                    backgroundColor: '#28a745',
                    padding: '10px 18px',
                    borderRadius: '6px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  Shop Now <i className="fa fa-plus" style={{ marginLeft: '6px' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Main Blog Posts */}
          <div className="col-lg-8">
            <LatestBlogPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;

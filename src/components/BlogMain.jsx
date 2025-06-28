import React from 'react';

const BlogMain = () => {
  return (
  <div
  className="blog-sidebar-area rts-section-gap"
  style={{ backgroundColor: '#fefefe', padding: '3rem 0' }}
>
  <div className="container">
    <div className="row">
      {/* Sidebar */}
      <div className="col-lg-4 pr--60 pr_md--10 pr_sm--10 rts-sticky-column-item">
        <div className="theiaStickySidebar">
          {/* Search */}
          <div
            className="blog-sidebar-single-wized"
            style={{
              marginBottom: '30px',
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <form action="#" style={{ display: 'flex' }}>
              <input
                type="text"
                placeholder="Search Here"
                style={{
                  flex: 1,
                  padding: '10px 15px',
                  border: '1px solid #ccc',
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
            className="blog-sidebar-single-wized with-title"
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              marginBottom: '30px',
            }}
          >
            <h4 className="title" style={{ fontSize: '18px', marginBottom: '15px' }}>
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
                    padding: '8px 0',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#28a745')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#333')}
                >
                  <p style={{ margin: 0 }}>{category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div
            className="blog-sidebar-single-wized with-title"
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              marginBottom: '30px',
            }}
          >
            <h4 className="title" style={{ fontSize: '18px', marginBottom: '15px' }}>
              🏷️ Tags
            </h4>
            <div className="tags-area-blog-short-main" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["Shampoo", "Butter", "Birthday", "Gifts", "Facial", "Green", "Lotion", "Scrub"].map((tag, i) => (
                <button
                  className="single-category"
                  key={i}
                  style={{
                    border: '1px solid #ccc',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#28a745';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.border = '1px solid #28a745';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.border = '1px solid #ccc';
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div
            className="blog-sidebar-single-wized with-add bg_image"
            style={{
              backgroundImage: `url(https://ekomart-nextjs.vercel.app/assets/images/blog/thumb/12.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              padding: '40px 25px',
              color: '#fff',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '250px',
            }}
          >
            <div className="add-are-content">
              <span style={{ fontSize: '14px', opacity: 0.9 }}>🔥 Weekend Discount</span>
              <h5 className="title" style={{ fontSize: '20px', margin: '10px 0' }}>
                Discover Real Organic <br /><span style={{ color: '#fff', fontWeight: 'bold' }}>Flavors Vegetable</span>
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
      </div>

      {/* Blog List */}
      <div className="col-lg-8">
        <div className="single-blog-main-wrapper-top">
          <div
            className="single-blog-style-card-border mb--40"
            style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              marginBottom: '30px',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <a href="#" className="thumbnail">
              <img
                src="https://ekomart-nextjs.vercel.app/assets/images/blog/05.jpg"
                alt="blog-area"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            <div className="inner-content-body" style={{ padding: '20px' }}>
              <div className="tag-area" style={{ fontSize: '13px', marginBottom: '10px', color: '#888' }}>
                <div className="single"><i className="fa fa-clock"></i> <span>15 Sep, 2023</span></div>
                <div className="single" style={{ marginLeft: '15px' }}><i className="fa fa-folder"></i> <span>Modern Fashion</span></div>
              </div>
              <a className="title-main" href="#">
                <h3
                  className="title"
                  style={{ fontSize: '20px', fontWeight: '600', margin: '10px 0', color: '#222' }}
                >
                  Profitable business makes your profit Best Solution
                </h3>
              </a>
              <p className="disc mb--20" style={{ fontSize: '14px', color: '#555' }}>
                Bibendum ac non dis aliquet rhoncus litora dui ante...
              </p>
              <div className="button-area">
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#218838')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                  Read Details <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>  
        <div className="single-blog-main-wrapper-top">
          <div
            className="single-blog-style-card-border mb--40"
            style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              marginBottom: '30px',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <a href="#" className="thumbnail">
              <img
                src="https://ekomart-nextjs.vercel.app/assets/images/blog/05.jpg"
                alt="blog-area"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            <div className="inner-content-body" style={{ padding: '20px' }}>
              <div className="tag-area" style={{ fontSize: '13px', marginBottom: '10px', color: '#888' }}>
                <div className="single"><i className="fa fa-clock"></i> <span>15 Sep, 2023</span></div>
                <div className="single" style={{ marginLeft: '15px' }}><i className="fa fa-folder"></i> <span>Modern Fashion</span></div>
              </div>
              <a className="title-main" href="#">
                <h3
                  className="title"
                  style={{ fontSize: '20px', fontWeight: '600', margin: '10px 0', color: '#222' }}
                >
                  Profitable business makes your profit Best Solution
                </h3>
              </a>
              <p className="disc mb--20" style={{ fontSize: '14px', color: '#555' }}>
                Bibendum ac non dis aliquet rhoncus litora dui ante...
              </p>
              <div className="button-area">
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#218838')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                  Read Details <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>  
         
        
        {/* You can map more blog posts similarly */}
      </div>
    </div>
  </div>
</div>

  );
};

export default BlogMain;

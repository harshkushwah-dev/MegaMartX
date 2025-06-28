import React from 'react';

const BlogMain = () => {
  return (
    <div className="blog-sidebar-area rts-section-gap">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-4 pr--60 pr_md--10 pr_sm--10 rts-sticky-column-item">
            <div className="theiaStickySidebar">
              {/* Search */}
              <div className="blog-sidebar-single-wized">
                <form action="#">
                  <input type="text" placeholder="Search Here" />
                  <button><i className="fa-regular fa-magnifying-glass"></i></button>
                </form>
              </div>

              {/* Categories */}
              <div className="blog-sidebar-single-wized with-title">
                <h4 className="title">Categories</h4>
                <div className="category-main-wrapper">
                  {[
                    "Baking Material", "Bread and Juice", "Clothing & Beauty",
                    "Fresh Vegetable", "Fresh Seafood", "Milks and Daires", "Wine & Drinks"
                  ].map((category, i) => (
                    <div className="single-category-area" key={i}>
                      <p>{category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="blog-sidebar-single-wized with-title">
                <h4 className="title">Tags</h4>
                <div className="tags-area-blog-short-main">
                  {["Shampoo", "Butter", "Birthday", "Gifts", "Facial", "Green", "Lotion", "Scrub"].map((tag, i) => (
                    <button className="single-category" key={i}>{tag}</button>
                  ))}
                </div>
              </div>

            

              {/* Banner (no background image logic yet) */}
              <div className="blog-sidebar-single-wized with-add bg_image" style={{backgroundImage:'url(https://ekomart-nextjs.vercel.app/assets/images/blog/thumb/12.jpg)'}} >
                <div className="add-are-content">
                  <span className="pre">Weekend Discount</span>
                  <h5 className="title">Discover Real organic <br /><span>Flavors Vegetable</span></h5>
                  <a href="#" className="shop-now-goshop-btn">
                    <span className="text">Shop Now</span>
                    <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                    <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Blog List */}
          <div className="col-lg-8">
            {/* Repeatable blog cards (you can later turn into map data) */}
            {/* One example shown below */}
            <div className="single-blog-main-wrapper-top">
              <div className="single-blog-style-card-border mb--40">
                <a href="/blog/profitable-business-makes-your-profit-Best-Solution" className="thumbnail">
                  <img src="https://ekomart-nextjs.vercel.app/assets/images/blog/05.jpg" alt="blog-area" />
                </a>
                <div className="inner-content-body">
                  <div className="tag-area">
                    <div className="single"><i className="fa-light fa-clock"></i><span>15 Sep, 2023</span></div>
                    <div className="single"><i className="fa-light fa-folder"></i><span>Modern Fashion</span></div>
                  </div>
                  <a className="title-main" href="/blog/profitable-business-makes-your-profit-Best-Solution">
                    <h3 className="title animated fadeIn">Profitable business makes your profit Best Solution</h3>
                  </a>
                  <p className="disc mb--20">Bibendum ac non dis aliquet rhoncus litora dui ante...</p>
                  <div className="button-area">
                    <a href="/blog/profitable-business-makes-your-profit-Best-Solution" className="rts-btn btn-primary radious-sm with-icon">
                      <div className="btn-text">Read Details</div>
                      <div className="arrow-icon"><i className="fa-solid fa-circle-plus"></i></div>
                      <div className="arrow-icon"><i className="fa-solid fa-circle-plus"></i></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat above for other posts... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;

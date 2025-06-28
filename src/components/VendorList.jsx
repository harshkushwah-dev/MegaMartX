import React from 'react';


const vendors = [
    {
        id: 1,
        logo: 'assets/images/vendor/01.svg',
        name: 'Fresh Juice Bar',
        status: 'Closed',
        rating: 4.5,
        address: '530 Post Ct El Dorado Hills California, United States',
        phone: '+1 (511) 934-8170',
    },
    {
        id: 2,
        logo: 'assets/images/vendor/02.svg',
        name: 'Food Character',
        status: 'Open',
        rating: 4.5,
        address: '530 Post Ct El Dorado Hills California, United States',
        phone: '+1 (511) 934-8170',
    },
    // Add more vendors as needed...
];

const VendorCard = ({ vendor }) => (
    <>
    <div className="col-lg-6">
        <div className="single-vendor-area">
            <div className="logo-vendor">
                <img src={vendor.logo} alt={vendor.name} />
            </div>
            <div className="inner">
                <h3 className="title">
                    {vendor.name}{' '}
                    <span className={vendor.status.toLowerCase()}>{vendor.status}</span>
                </h3>
                <div className="stars-area">
                    {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))}
                    <span>{vendor.rating} out of 5</span>
                </div>
                <div className="location">
                    <i className="fa-regular fa-location-dot"></i>
                    <p>{vendor.address}</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-phone-volume"></i>
                    <p>{vendor.phone}</p>
                </div>
                <a href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                    <div className="btn-text">Visit Store</div>
                    <div className="arrow-icon">
                        <i className="fa-light fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
    
    </>
);

const VendorList = () => {
    return (
        <div className="vendor-search-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="vendor-search-area-wrapper">
                            <h1 className="title">Vendors List</h1>
                            <form className="search-vendor-form" action="#">
                                <input type="text" placeholder="Search vendors (by name or ID)..." />
                                <a href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">Search</div>
                                    <div className="arrow-icon">
                                        <i className="fa-light fa-magnifying-glass"></i>
                                    </div>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {vendors.map((vendor) => (
                        <VendorCard key={vendor.id} vendor={vendor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VendorList;

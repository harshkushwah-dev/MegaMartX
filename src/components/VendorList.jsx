import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample vendors (15 shown here; you can extend up to 25 as needed)
const vendorsData = [
    {
        id: 1,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
        name: 'Fresh Juice Bar',
        status: 'Open',
        rating: 4.5,
        address: '12 Green Park, New Delhi, India',
        phone: '+91 98123 45678',
    },
    {
        id: 2,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
        name: 'Organic Farm Store',
        status: 'Closed',
        rating: 4.3,
        address: '55 MG Road, Bengaluru, India',
        phone: '+91 99001 11223',
    },
    {
        id: 3,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
        name: 'Daily Dairy',
        status: 'Open',
        rating: 4.6,
        address: '89 Whitefield, Bengaluru, India',
        phone: '+91 98989 12345',
    },
    {
        id: 4,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
        name: 'Tandoori Treats',
        status: 'Closed',
        rating: 4.2,
        address: '22 Banjara Hills, Hyderabad, India',
        phone: '+91 77889 44556',
    },
    {
        id: 5,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/05.svg',
        name: 'Fresh Veggies Corner',
        status: 'Open',
        rating: 4.7,
        address: '44 Sector 17, Chandigarh, India',
        phone: '+91 99880 22110',
    },
    {
        id: 6,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
        name: 'Spice & Herbs Mart',
        status: 'Closed',
        rating: 4.1,
        address: '33 MG Marg, Pune, India',
        phone: '+91 88776 33445',
    },
    {
        id: 7,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
        name: 'Urban Grocery',
        status: 'Open',
        rating: 4.4,
        address: '56 Park Street, Kolkata, India',
        phone: '+91 76543 22111',
    },
    {
        id: 8,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
        name: 'Farm Fresh Fruits',
        status: 'Closed',
        rating: 4.0,
        address: '78 Connaught Place, Delhi, India',
        phone: '+91 91234 56789',
    },
    {
        id: 9,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
        name: 'Bakers Delight',
        status: 'Open',
        rating: 4.9,
        address: '101 Gariahat Rd, Kolkata, India',
        phone: '+91 88888 99999',
    },
    {
        id: 10,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/05.svg',
        name: 'Healthy Harvest',
        status: 'Closed',
        rating: 4.2,
        address: '23 Koregaon Park, Pune, India',
        phone: '+91 97654 32109',
    },
    {
        id: 11,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
        name: 'City Spice Hub',
        status: 'Open',
        rating: 4.3,
        address: '12 Marina Beach Rd, Chennai, India',
        phone: '+91 90011 44556',
    },
    {
        id: 12,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
        name: 'Pure Essentials Mart',
        status: 'Closed',
        rating: 4.1,
        address: '65 Civil Lines, Kanpur, India',
        phone: '+91 88000 66777',
    },
    {
        id: 13,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
        name: 'Nature Basket',
        status: 'Open',
        rating: 4.5,
        address: '88 Rajouri Garden, Delhi, India',
        phone: '+91 84444 55666',
    },
    {
        id: 14,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
        name: 'Meat & More',
        status: 'Closed',
        rating: 4.0,
        address: '17 VIP Rd, Surat, India',
        phone: '+91 77889 22334',
    },
    {
        id: 15,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/05.svg',
        name: 'Apna Bazaar',
        status: 'Open',
        rating: 4.6,
        address: '39 Jawahar Nagar, Jaipur, India',
        phone: '+91 96666 88990',
    },
    {
        id: 16,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
        name: 'Green Earth Grocers',
        status: 'Closed',
        rating: 4.1,
        address: '120 Eco Street, Ahmedabad, India',
        phone: '+91 93333 55667',
    },
    {
        id: 17,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
        name: 'Sunrise Supermart',
        status: 'Open',
        rating: 4.7,
        address: '5 Andheri West, Mumbai, India',
        phone: '+91 94444 11122',
    },
    {
        id: 18,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
        name: 'Himalaya Organic',
        status: 'Closed',
        rating: 4.0,
        address: '22 Mall Road, Dehradun, India',
        phone: '+91 95555 77889',
    },
    {
        id: 19,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
        name: 'Local Cart',
        status: 'Open',
        rating: 4.5,
        address: '66 Residency Rd, Indore, India',
        phone: '+91 98888 76543',
    },
    {
        id: 20,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/05.svg',
        name: 'Everyday Needs',
        status: 'Closed',
        rating: 4.2,
        address: 'Plot 22, Salt Lake, Kolkata, India',
        phone: '+91 93213 33333',
    },
    {
        id: 21,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/01.svg',
        name: 'The Daily Basket',
        status: 'Open',
        rating: 4.4,
        address: 'Road 5, Jubilee Hills, Hyderabad, India',
        phone: '+91 96543 21098',
    },
    {
        id: 22,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/02.svg',
        name: 'Fresh & Fast',
        status: 'Closed',
        rating: 4.3,
        address: '10 Main Street, Lucknow, India',
        phone: '+91 99876 54321',
    },
    {
        id: 23,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/03.svg',
        name: 'Daily Mart',
        status: 'Open',
        rating: 4.2,
        address: '7 Ring Road, Patna, India',
        phone: '+91 97777 33321',
    },
    {
        id: 24,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/04.svg',
        name: 'BazaarWala',
        status: 'Closed',
        rating: 4.0,
        address: '2 Sector 20, Noida, India',
        phone: '+91 91234 22334',
    },
    {
        id: 25,
        logo: 'https://ekomart-nextjs.vercel.app/assets/images/vendor/05.svg',
        name: 'Organic Essence',
        status: 'Open',
        rating: 4.8,
        address: '5 Mall Rd, Shimla, India',
        phone: '+91 99999 11111',
    },
];


const VendorCard = ({ vendor }) => (
    <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="single-vendor-area shadow-sm p-3 rounded-3 bg-white h-100 vendor-hover">
            <div className="logo-vendor text-center mb-3">
                <img src={vendor.logo} alt={vendor.name} style={{ width: '60px', height: '60px' }} />
            </div>
            <div className="inner">
                <h5 className="title d-flex justify-content-between align-items-center">
                    {vendor.name}
                    <span className={`badge ${vendor.status === 'Open' ? 'bg-success' : 'bg-danger'}`}>{vendor.status}</span>
                </h5>
                <div className="stars-area mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} className="fa-solid fa-star text-warning"></i>
                    ))}
                    <span className="ms-1 text-muted small">({vendor.rating})</span>
                </div>
                <p className="small text-muted"><i className="fa-regular fa-location-dot me-1"></i>{vendor.address}</p>
                <p className="small text-muted"><i className="fa-solid fa-phone-volume me-1"></i>{vendor.phone}</p>
                <a href="/shop" className="rts-btn btn-primary w-100 mt-2">
                    Visit Store
                </a>
            </div>
        </div>
    </div>
);

const VendorList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVendors = vendorsData.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="vendor-search-area rts-section-gap mt-5 ">
            <div className="container">
                {/* Header & Search */}
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="row align-items-center gy-3 gx-3">
                            {/* Heading */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <h2 className="title m-0" style={{ fontSize: '28px' }}>Vendors List</h2>
                            </div>

                            {/* Search Bar */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2">
                                    <input
                                        type="text"
                                        placeholder="Search vendors by shop name..."
                                        className="form-control"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={{
                                            border: '1px solid black',
                                            borderRadius: '10px',
                                            width: '100%',
                                        }}
                                    />
                                    <button className="rts-btn btn-primary w-35 w-sm-auto" style={{ backgroundColor: '#28a745', borderRadius: '10px', color: '#fff' }} >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Vendor Cards */}
                <div className="row g-4">
                    {filteredVendors.length > 0 ? (
                        filteredVendors.map((vendor) => (
                            <VendorCard key={vendor.id} vendor={vendor} />
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No vendors found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Extra Hover & Mobile Style */}
            <style jsx>{`
                .vendor-hover {
                    transition: all 0.3s ease;
                    transform: translateY(0);
                }
                .vendor-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }
                .vendor-hover a {
                    color: #fff !important;
                }
                .vendor-hover a:hover {
                    color: #fff !important;
                }
@media (max-width: 576px) {
  .rts-btn.btn-primary {
    width: 100%;
  }
  .form-control {
    width: 100%;
  }
}

            `}</style>
        </div>
    );
};

export default VendorList;

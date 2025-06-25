import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsWithDiscount = () => {
    const [discountedProducts, setDiscountedProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => {
                const filtered = res.data.filter(p => p.salePrice < p.regularPrice);
                setDiscountedProducts(filtered.slice(0, 4)); // show max 4
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className="rts-grocery-feature-area rts-section-gapBottom">
            <div className="container">
                <div className="row g-4">

                    {/* Left Side - Static Banners */}
                    <div className="col-md-6">
                        <a
                            href="#"
                            className="single-discount-with-bg"
                            style={{
                                backgroundImage: `url('https://www.aces.edu/wp-content/uploads/2023/02/shutterstock_795233002-scaled.jpg')`,
                                display: 'block',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                padding: '20px',
                                color: '#fff',
                                marginBottom: '20px',
                                height: '250px',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="inner-content">
                                <h4 className="title">Alpro Organic Flavored <br /> Fresh Juice</h4>
                                <div className="price-area">
                                    <span>Only</span>
                                    <h4 className="title">$15.00</h4>
                                </div>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="single-discount-with-bg"
                            style={{
                                backgroundImage: `url('https://www.aces.edu/wp-content/uploads/2023/02/shutterstock_795233002-scaled.jpg')`,
                                display: 'block',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                padding: '20px',
                                color: '#fff',
                                height: '250px',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="inner-content">
                                <h4 className="title">Fresh Juice Organic Special <br /> 20% Off</h4>
                                <div className="price-area">
                                    <span>Only</span>
                                    <h4 className="title">$19.00</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right Side - 4 Dynamic Product Cards */}
                    <div className="col-md-6">
                        <div className="row g-4">
                            {discountedProducts.slice(0, 4).map(product => (
                                <div key={product._id} className="col-sm-6">
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: '10px',
                                        padding: '15px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-6px)';
                                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                                        }}
                                    >
                                        {/* Discount Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            backgroundColor: '#e74c3c',
                                            color: '#fff',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            fontSize: '12px'
                                        }}>
                                            {Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)}% Off
                                        </div>

                                        {/* Product Image */}
                                        <div style={{
                                            width: '100%',
                                            height: '150px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                            marginBottom: '10px'
                                        }}>
                                            <img
                                                src={`http://localhost:5000/uploads/${product.image}`}
                                                alt={product.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div>
                                            <h4 style={{ fontSize: '16px', margin: '0 0 5px' }}>{product.name}</h4>
                                            <span style={{ fontSize: '13px', color: '#555' }}>{product.size}</span>
                                            <div style={{ marginTop: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                <span style={{ color: '#27ae60', fontWeight: 'bold' }}>₹{product.salePrice}</span>
                                                <span style={{ textDecoration: 'line-through', color: '#aaa' }}>₹{product.regularPrice}</span>
                                            </div>
                                        </div>

                                        {/* Cart Button */}
                                        <div style={{ marginTop: '15px' }}>
                                            <button style={{
                                                backgroundColor: '#27ae60',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '6px'
                                            }}>
                                                <i className="fa fa-shopping-cart"></i> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

// ✅ Product Card
const ProductCard = ({ link, imgSrc, title, pack, currentPrice, previousPrice }) => {
    const discountPercent = Math.floor(((parseFloat(previousPrice.slice(1)) - parseFloat(currentPrice.slice(1))) / parseFloat(previousPrice.slice(1))) * 100);

    return (
        <>

            <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                    className="single-shopping-card-one discount-offer"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '15px',
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '15px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        height: '150px',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}
                >
                    {/* Image Section */}
                    <div style={{ width: '120px', height: '120px', position: 'relative' }}>
                        <a href={link} className="thumbnail-preview" style={{ display: 'block' }}>
                            <div
                                className="badge"
                                style={{
                                    position: 'absolute',
                                    top: '5px',
                                    left: '5px',
                                    backgroundColor: '#e74c3c',
                                    color: '#fff',
                                    fontSize: '12px',
                                    padding: '4px 6px',
                                    borderRadius: '4px',
                                    zIndex: 1,
                                }}
                            >
                                <span>{discountPercent}% Off</span>
                                <i className="fa-solid fa-bookmark" style={{ marginLeft: '4px' }}></i>
                            </div>
                            <img
                                src={imgSrc}
                                alt="grocery"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </a>
                    </div>

                    {/* Content Section */}
                    <div className="body-content" style={{ flex: 1, textAlign: 'left' }}>
                        <a href={link}>
                            <h4 className="title" style={{ marginBottom: '4px', fontSize: '16px' }}>{title}</h4>
                        </a>
                        <span className="availability" style={{ fontSize: '13px', color: '#555' }}>{pack}</span>

                        <div style={{ margin: '6px 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <span className="current" style={{ color: '#27ae60', fontWeight: 'bold' }}>{currentPrice}</span>
                            <span className="previous" style={{ textDecoration: 'line-through', color: '#aaa' }}>{previousPrice}</span>
                        </div>

                        {/* Cart + Quantity */}
                        <div
                            className="cart-counter-action"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '10px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {/* Quantity */}
                            <div
                                className="quantity-edit"
                                style={{
                                    display: 'flex',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    overflow: 'hidden',
                                }}
                            >
                                <button
                                    className="button minus"
                                    style={{
                                        padding: '4px 8px',
                                        background: '#f0f0f0',
                                        border: 'none',
                                        transition: 'background 0.3s ease',
                                    }}
                                >
                                    <i className="fa-regular fa-chevron-down"></i>
                                </button>
                                <input
                                    type="text"
                                    className="input"
                                    value="1"
                                    readOnly
                                    style={{
                                        width: '30px',
                                        textAlign: 'center',
                                        border: 'none',
                                        outline: 'none',
                                    }}
                                />
                                <button
                                    className="button plus"
                                    style={{
                                        padding: '4px 8px',
                                        background: '#f0f0f0',
                                        border: 'none',
                                        transition: 'background 0.3s ease',
                                    }}
                                >
                                    <i className="fa-regular fa-chevron-up"></i>
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <a
                                href="#"
                                className="rts-btn btn-primary radious-sm with-icon add-to-cart"
                                style={{
                                    backgroundColor: '#27ae60',
                                    color: '#fff',
                                    padding: '8px 12px',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div className="btn-text">Add</div>
                                <div className="arrow-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default ProductsWithDiscount;

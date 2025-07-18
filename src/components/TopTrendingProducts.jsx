import React, { useState } from 'react';
import sampleProducts from '../data/sampleProducts';

const TopTrendingProducts = () => {
  const uniqueCategoryProducts = Object.values(
    sampleProducts.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = product;
      return acc;
    }, {})
  );

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cart, setCart] = useState([]);

  const categories = [...new Set(uniqueCategoryProducts.map((p) => p.category))];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    if (type === 'min') setMinPrice(value);
    else setMaxPrice(value);
  };

  const filteredProducts = uniqueCategoryProducts.filter((p) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const priceMatch =
      (!minPrice || p.salePrice >= Number(minPrice)) &&
      (!maxPrice || p.salePrice <= Number(maxPrice));
    return categoryMatch && priceMatch;
  });

  const itemsToShow = filteredProducts.slice(0, 6);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`"${product.name}" added to cart!`);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 border-bottom pb-2" style={{ fontSize: '24px' }}>
        Top Trending Products
      </h2>

      <div className="row">
        {/* Left Sidebar Filter */}
        <div className="col-md-3 mb-4">
          <div className="border p-3 rounded">
            <h5 className="mb-3">Filter by Category</h5>
            {categories.map((category) => (
              <div className="form-check mb-2" key={category}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}

            <hr />

            <h5 className="mb-3">Filter by Price (₹)</h5>
            <div className="mb-2">
              <label className="form-label">Min Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 30"
                value={minPrice}
                onChange={(e) => handlePriceChange(e, 'min')}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Max Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 90"
                value={maxPrice}
                onChange={(e) => handlePriceChange(e, 'max')}
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="row g-4">
            {itemsToShow.map((product) => (
              <div className="col-12 col-sm-6 col-md-4" key={product._id}>
                <div
                  className="card h-100 border-0 shadow-sm d-flex flex-column rounded-4 overflow-hidden"
                  style={{ transition: 'transform 0.3s', background: '#fff' }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-100 h-100"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column p-3">
                    <h5 className="fw-semibold mb-1" style={{ fontSize: '18px', color: '#333' }}>
                      {product.name}
                    </h5>
                    <p className="text-muted mb-2">{product.size}</p>
                    <div className="d-flex align-items-center mb-3" style={{ fontSize: '18px' }}>
                      <span className="text-success fw-bold me-2">₹{product.salePrice}</span>
                      <span className="text-muted text-decoration-line-through">₹{product.regularPrice}</span>
                    </div>
                    <button
                      className="btn btn-success mt-auto px-3 py-2 rounded-pill"
                      onClick={() => handleAddToCart(product)}
                      style={{ fontSize: '15px', backgroundColor: '#28a745' }}
                    >
                      <i className="fa fa-shopping-cart me-1"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>

          {/* Cart Summary */}
          {/* <div className="mt-5">
            <h5>🛒 Cart Items: {cart.length}</h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopTrendingProducts;

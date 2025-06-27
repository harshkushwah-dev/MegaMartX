import React, { useState } from 'react';

const TopTrendingProducts = () => {
  const products = [
    {
      _id: '1',
      name: 'Fresh Apples',
      size: '1kg',
      salePrice: 80,
      regularPrice: 120,
      image: 'https://t3.ftcdn.net/jpg/02/36/88/12/240_F_236881295_odo9H1vtTZUvewumPdeRE4tHUtVa2UJg.jpg',
      category: 'Trending Fruits',
    },
    {
      _id: '2',
      name: 'Organic Bananas',
      size: '1 Dozen',
      salePrice: 60,
      regularPrice: 90,
      image: 'https://t3.ftcdn.net/jpg/02/15/78/44/240_F_215784483_BPQrfgtWwgTEQh6G0U3NocKwoCyuJ8BL.jpg',
      category: 'Health Picks',
    },
    {
      _id: '3',
      name: 'Green Grapes',
      size: '500g',
      salePrice: 70,
      regularPrice: 100,
      image: 'https://t4.ftcdn.net/jpg/02/75/25/69/240_F_275256966_ycN3olfZetq8rbSxUh5ER8aRxW6NLBNA.jpg',
      category: 'Fresh Deals',
    },
    {
      _id: '4',
      name: 'Tomatoes',
      size: '1kg',
      salePrice: 45,
      regularPrice: 65,
      image: 'https://t3.ftcdn.net/jpg/01/77/78/46/240_F_177784681_V5aIQ1TVxHLl9qszqHfy80fk7k2R8WFU.jpg',
      category: 'Kitchen ',
    },
    {
      _id: '5',
      name: 'Spinach',
      size: '1 bunch',
      salePrice: 30,
      regularPrice: 50,
      image: 'https://t3.ftcdn.net/jpg/12/40/08/56/240_F_1240085635_9WuuT4AemcqmzlRFAvcBQ3OoUG7C19nR.jpg',
      category: 'Green Boost',
    },
    {
      _id: '6',
      name: 'Milk 1L',
      size: '1 Litre',
      salePrice: 50,
      regularPrice: 70,
      image: 'https://t3.ftcdn.net/jpg/02/81/00/18/240_F_281001895_usd6SIfy6zjBCf7hkVtFGKpG4B3zbwWM.jpg',
      category: 'Daily Dairy',
    },
    {
      _id: '7',
      name: 'Brown Bread',
      size: '400g',
      salePrice: 35,
      regularPrice: 55,
      image: 'https://t4.ftcdn.net/jpg/11/40/32/87/240_F_1140328789_UPsgYurUxhxzrsLuRFo9c9Ft1YOoAlVR.jpg',
      category: 'Bestselling Bakery',
    },
    {
      _id: '8',
      name: 'Orange Juice',
      size: '1L',
      salePrice: 65,
      regularPrice: 90,
      image: 'https://t4.ftcdn.net/jpg/04/62/69/31/240_F_462693107_PflUFhf6XUgDd1N2PSxNEOe362XplEw4.jpg',
      category: 'Top Refreshments',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Added to cart: ${product.name}`);
    alert(`"${product.name}" added to cart!`);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 border-bottom pb-2" style={{ fontSize: '24px' }}>
        Top Trending Products
      </h2>

      {/* Category Tabs */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            style={{ width: 'auto', fontSize: '14px' }}
            className={`btn btn-sm px-3 py-2 rounded-pill ${
              activeCategory === category
                ? 'btn-success text-white'
                : 'btn-outline-secondary'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
            <div className="card h-100 shadow-sm d-flex flex-column">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '180px', objectFit: 'cover', borderRadius:'10px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold" style={{fontSize:'20px'}} >{product.name}</h5>
                <p className="card-text text-muted mb-2">{product.size}</p>
                <div className="d-flex align-items-center mb-3" style={{fontSize:'20px'}} >
                  <span className="text-success fw-bold me-2">
                    ₹{product.salePrice}
                  </span>
                  <span className="text-muted text-decoration-line-through"  >
                    ₹{product.regularPrice}
                  </span>
                </div>
                <button
                  className="btn btn-sm btn-outline-success mt-auto"
                  onClick={() => handleAddToCart(product)}
                  style={{fontSize:'20px', borderRadius:'10px'}}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Show cart summary */}
      <div className="mt-5">
        <h5>🛒 Cart Items: {cart.length}</h5>
      </div>
    </div>
  );
};

export default TopTrendingProducts;

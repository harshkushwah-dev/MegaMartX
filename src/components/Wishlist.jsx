// src/components/Wishlist.jsx
import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="container mt-5">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="list-group">
          {wishlistItems.map(item => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
              {item.name}
              <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

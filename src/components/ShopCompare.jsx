import React from "react";
import { motion } from "framer-motion";

const compareData = [
  {
    _id: "BV1",
    name: "Lemon Iced Tea",
    size: "500ml",
    regularPrice: 55,
    salePrice: 45,
    stock: 80,
    SKU: "SKU-BV1",
    category: "Beverages",
    tag: "refreshing, tea, chilled",
    description: "Cool and zesty iced tea with a splash of lemon.",
    image:
      "https://t3.ftcdn.net/jpg/15/16/85/24/240_F_1516852422_Vim6xkFIWsmYgtMsfvI1ViSnEJ5xsKlM.jpg",
  },
  {
    _id: "FV1",
    name: "Red Apples",
    size: "1kg",
    regularPrice: 160,
    salePrice: 135,
    stock: 78,
    SKU: "SKU-FV1",
    category: "Fruits & Vegetables",
    tag: "organic, sweet, fresh",
    description: "Juicy red apples perfect for snacking and baking.",
    image:
      "https://t3.ftcdn.net/jpg/15/16/85/24/240_F_1516852422_Vim6xkFIWsmYgtMsfvI1ViSnEJ5xsKlM.jpg",
  },
  {
    _id: "HL1",
    name: "Almond Milk",
    size: "1L",
    regularPrice: 120,
    salePrice: 98,
    stock: 50,
    SKU: "SKU-HL1",
    category: "Health",
    tag: "vegan, dairy-free, nutritious",
    description: "Plant-based almond milk rich in calcium and vitamin E.",
    image:
      "https://t4.ftcdn.net/jpg/04/98/53/23/240_F_498532337_uozAW9QnZIwFZpdQWGyLkLzNM7w3S3Wz.jpg",
  },
];

const ShopCompare = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        background: "#f1fdf4",
        minHeight: "100vh",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "34px",
          fontWeight: "bold",
          color: "#28a745",
        }}
      >
        Compare Products
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {compareData.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "320px",
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 12px 25px rgba(0,0,0,0.05)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderBottom: "1px solid #eee",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              >
                {item.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div style={{ padding: "20px", flex: 1 }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
                {item.description}
              </p>

              <div style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Size:</strong> {item.size}</p>
                <p><strong>SKU:</strong> {item.SKU}</p>
                <p><strong>Tags:</strong> {item.tag}</p>
              </div>

              <div style={{ margin: "10px 0" }}>
                <span
                  style={{
                    color: "#28a745",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  ₹{item.salePrice}
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#aaa",
                    marginLeft: "10px",
                  }}
                >
                  ₹{item.regularPrice}
                </span>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopCompare;

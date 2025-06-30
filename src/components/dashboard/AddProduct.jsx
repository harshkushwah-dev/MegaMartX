import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    regularPrice: "",
    salePrice: "",
    size: "",
    stock: "",
    sku: "",
    category: "",
    tag: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Product added:", res.data);
      alert("Product Added Successfully");

      // Reset form
      setProduct({
        name: "",
        regularPrice: "",
        salePrice: "",
        size: "",
        stock: "",
        sku: "",
        category: "",
        tag: "",
        description: "",
      });
      setImage(null);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add New Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {[
            { name: "name", type: "text", placeholder: "Product Name" },
            { name: "regularPrice", type: "number", placeholder: "Regular Price" },
            { name: "salePrice", type: "number", placeholder: "Sale Price" },
            { name: "size", type: "text", placeholder: "Size" },
            { name: "stock", type: "number", placeholder: "Stock" },
            { name: "sku", type: "text", placeholder: "SKU" },
            { name: "category", type: "text", placeholder: "Category" },
            { name: "tag", type: "text", placeholder: "Tag" },
          ].map((field, i) => (
            <input
              key={i}
              name={field.name}
              type={field.type}
              value={product[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              style={styles.input}
              required={field.name === "name" || field.name === "regularPrice"}
            />
          ))}

          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="4"
            style={{ ...styles.input, resize: "none" }}
          ></textarea>

          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
            style={styles.fileInput}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.background = "#16a34a")}
            onMouseLeave={(e) => (e.target.style.background = "#22c55e")}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

// ✨ Inline styles with animations
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
    background: "linear-gradient(to right, #f0fdf4, #dcfce7)",
    minHeight: "100vh",
    animation: "fadeIn 1s ease",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    animation: "slideUp 0.8s ease",
  },
  heading: {
    marginBottom: "25px",
    textAlign: "center",
    fontSize: "26px",
    color: "#15803d",
    fontWeight: "700",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    transition: "border 0.3s ease",
  },
  fileInput: {
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#22c55e",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    fontSize: "16px",
  },
};

// Keyframe animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
`, styleSheet.cssRules.length);

export default AddProduct;

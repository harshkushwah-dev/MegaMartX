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

  // Handle form input change
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file select
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Product added:", res.data);
      alert("Product Added Successfully");

      // Clear form
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
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required /><br />
        <input type="number" name="regularPrice" value={product.regularPrice} onChange={handleChange} placeholder="Regular Price" required /><br />
        <input type="number" name="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Sale Price" /><br />
        <input type="text" name="size" value={product.size} onChange={handleChange} placeholder="Size" /><br />
        <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" /><br />
        <input type="text" name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" /><br />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" /><br />
        <input type="text" name="tag" value={product.tag} onChange={handleChange} placeholder="Tag" /><br />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" /><br />
        <input type="file" name="image" onChange={handleImageChange} accept="image/*" required /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

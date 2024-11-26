import React, { useState, useEffect } from 'react';
import '../Products.css'; 

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  
  useEffect(() => {
    fetch('/list.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products by category
  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="products-page">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>

      {/* Filter Section */}
      <div className="filter-section text-center mb-6">
        <label className="text-xl mr-4">Filter by Category:</label>
        <select
          className="border rounded px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Flooring">Flooring</option>
          <option value="Construction Materials">Construction Materials</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Bathroom Supplies">Bathroom Supplies</option>
          <option value="Roofing">Roofing</option>
        </select>
      </div>

      {/* Products Listing */}
      <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name text-xl font-bold mt-4">{product.name}</h2>
            <p className="product-description mt-2">{product.description}</p>
            <p className="text-lg font-bold text-green-600">Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

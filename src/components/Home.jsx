// Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const selectStyle = {
  padding: '8px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  width: '200px',
  marginRight: '10px',
};

function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(['all', ...uniqueCategories]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    addToCart(selectedProduct);
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mt-4">


      <div className="mb-4">
        <label htmlFor="categorySelect" className="mr-2">Select Category:</label>
        <select
          id="categorySelect"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          style={selectStyle}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top img-fluid p-5"
                  alt={product.title}
                  style={{ height: '240px' }}
                />
              </Link>
              <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p><strong>Category: </strong>{product.category}</p>

                <div className='d-flex justify-content-around '>
                  <Link to={`/product/${product.id}`} className="btn btn-primary mt-6 col-md-5">
                    View Details
                  </Link>
                  <button
                    className="btn btn-success mt-6 col-md-5"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

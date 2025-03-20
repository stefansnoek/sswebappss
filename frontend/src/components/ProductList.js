import React, { useEffect, useState } from 'react';
import { catalogService } from '../services/catalogService';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    catalogService.getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

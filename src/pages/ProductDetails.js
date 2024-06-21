import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../services/api';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductDetails(id);
        setProduct(result);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (!product) return <div>Loading...</div>;
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default ProductDetails;

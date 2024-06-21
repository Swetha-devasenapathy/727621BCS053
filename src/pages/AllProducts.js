import React, { useEffect, useState } from 'react';
   import { getAllProducts } from '../services/api';
   import { Link } from 'react-router-dom';
   import '../styles/AllProducts.css';

   const AllProducts = () => {
     const [products, setProducts] = useState([]);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const result = await getAllProducts();
           setProducts(result);
         } catch (err) {
           setError('Failed to fetch products. Please try again later.');
         }
       };
       fetchData();
     }, []);

     return (
       <div>
         <h1>All Products</h1>
         {error ? (
           <p style={{ color: 'red' }}>{error}</p>
         ) : (
           <div className="product-list">
             {products.map((product) => (
               <div key={product.id} className="product-item">
                 <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
                 <h2>{product.name}</h2>
                 <p>Company: {product.company}</p>
                 <p>Category: {product.category}</p>
                 <p>Price: ${product.price}</p>
                 <p>Rating: {product.rating}</p>
                 <p>Discount: {product.discount}%</p>
                 <p>{product.availability ? 'Available' : 'Not Available'}</p>
                 <Link to={`/product/${product.id}`}>View Details</Link>
               </div>
             ))}
           </div>
         )}
       </div>
     );
   };

   export default AllProducts;

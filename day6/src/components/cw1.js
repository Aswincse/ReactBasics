
import React from 'react';

const ProductList = ({ products }) => (
  <div>
    <h2>Product List</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;

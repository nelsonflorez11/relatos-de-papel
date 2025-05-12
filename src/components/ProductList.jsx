// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { products as productsData } from '../data/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una carga de datos (como si viniera de una API)
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Catálogo de libros</h2>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Precio:</strong> ${product.price}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
    
    
  );
};

export default ProductList;
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
    <div className="container py-5">
      <h1 className="mb-4 text-center">Tienda de Libros</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>                
                <div className="mt-auto">
                  <h6 className="text-primary">${product.price}</h6>
                  <button className="btn btn-outline-primary w-100 mt-2">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
  );
};

export default ProductList;
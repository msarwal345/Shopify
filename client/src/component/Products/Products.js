import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [data, setData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch the currently viewed product
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching product:', error));

    // Fetch related products based on the category of the currently viewed product
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const filteredRelatedProducts = products.filter(
          product => product.category === data.category && product.id !== Number(id)
        );
        setRelatedProducts(filteredRelatedProducts);
      })
      .catch(error => console.error('Error fetching related products:', error));
  }, [id, data.category]);

  return (
    <>
      <div className='container my-5 py-2'>
        <div className='row'>
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={data.image}
              alt={data.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{data.category}</h4>
            <h1 className="display-4">{data.title}</h1>
            <p className="lead">
              {data.rating && data.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 my-4">${data.price}</h3>
            <p className="lead">{data.description}</p>
            <button
              className="btn btn-outline-dark"
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
      
      
    <div className='row mt-5 justify-content-center'>
       <div className='col-12 text-center'>
        <h2 className='mb-4'>You May Also Like</h2>
        </div>
     {relatedProducts.map(product => (
      <div className='col-md-3 col-sm-6' key={product.id}>
        <div className='card mb-4'>
            <img
            height={400}
            src={product.image}
            className='card-img-top'
            alt={product.title}
           />
         <div className='card-body'>
             <h5>{product.title.substring(0, 15)}...</h5>
             <p>Price: ${product.price}</p>
             <Link to={`/product/${product.id}`} className='btn btn-dark'>
            View Details
          </Link>
           </div>
        </div>
       </div>
     ))}   
   </div>

    </>
  );
}

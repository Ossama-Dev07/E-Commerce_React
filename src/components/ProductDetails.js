import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    function Addtocart() {
        console.log(count);
    }

    const ratingBarStyle = {
        width: `${(product.rating.rate / 5) * 100}%`,
        height: '20px',
        backgroundColor: '#ffc107', 
    };

    return (
        <div className="container mt-4">
            <h1>{product.title}</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} className="img-fluid" style={{ height: '300px' }} />
                </div>
                <div className="col-md-6">
                    <p>${product.price}</p>
                    <p>Description: {product.description}</p>
                    <div className="mb-3">
                        <strong>Rating:</strong>
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={ratingBarStyle}
                                aria-valuenow={product.rating.rate}
                                aria-valuemin="0"
                                aria-valuemax="5"
                            >
                                {product.rating.rate}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-evenly">
                        <button className="btn btn-primary mt-6 " onClick={() => setCount(count - 1)}>-</button>
                        <p>{count}</p>
                        <button className="btn btn-primary mt-6 " onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <button className="btn btn-success mt-5 col-md-5" onClick={Addtocart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;


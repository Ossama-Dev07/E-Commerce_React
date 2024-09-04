// Cart.js

import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cartItems, getCartTotal, removeFromCart } = useCart();

    const productQuantityMap = cartItems.reduce((map, item) => {
        const { id } = item;
        map[id] = map[id] ? map[id] + 1 : 1;
        return map;
    }, {});

    const uniqueProducts = Object.keys(productQuantityMap).map(productId => {
        const product = cartItems.find(item => item.id === parseInt(productId, 10));
        const quantity = productQuantityMap[productId];
        return { ...product, quantity };
    });

    const handleDeleteProduct = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-group">
                        {uniqueProducts.map((product, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={product.image} alt={product.title} className="mr-3" style={{ maxWidth: '50px' }} />
                                    <div>
                                        <p className="mb-1">{product.title}</p>
                                        <p className="text-muted">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0">${product.price}</p>
                                    <button
                                        className="btn btn-danger btn-sm mt-2"
                                        onClick={() => handleDeleteProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-3">Total: ${getCartTotal()}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;

// CartContext.js

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

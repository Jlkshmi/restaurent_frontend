import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider =({ children }) => {
    const [cart,setcart] =useState([])
    const addToCart = (item) =>{
        setcart((prevCart) => [...prevCart,item])
    }
    const removeFromCart = (itemName) =>{
        setcart((prevCart) => prevCart.filter(item => item.name !== itemName));
    }
  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;
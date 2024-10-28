import React, { useContext } from 'react'
import "./cartPage.css"
import CartContext from '../../context/UserContext'

function CartPage() {
    const {cart,removeFromCart} = useContext(CartContext)
  return (
    <>
    <div className='cart-wrapper'>
        <h1>
            Your Cart
        </h1>
        {cart.length=== 0?(<p>
            cart is empty
        </p>):(<ul>
            {cart.map((item,index)=>(
                <li key={index}>
                <img src={item.image} alt={item.name} className="cart-image" />
                <h2>{item.name}</h2>
                <h2>{item.price} RS</h2>
                <i onClick={() => removeFromCart(item.name)} className="fa-solid fa-xmark"></i>
            </li>
            ))}
        </ul>)}
    </div>
    </>
  )
}

export default CartPage
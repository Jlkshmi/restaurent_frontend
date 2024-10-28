import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../../context/UserContext';
const burgerList = [
    { 
        name: 'Classic Cheeseburger', 
        category: 'Non-Vegetarian', 
        image: '/images/Classic Cheeseburger.jpg',
        price: 200,
        addons: ['Extra Cheese', 'Bacon', 'Onion Rings']
    },
    { 
        name: 'Bacon Burger', 
        category: 'Non-Vegetarian', 
        image: '/images/Bacon Burger.jpg',
        price: 250,
        addons: ['Extra Bacon', 'BBQ Sauce', 'Pickles']
    },
    { 
        name: 'Veggie Burger', 
        category: 'Vegetarian', 
        image: '/images/Veggie Burger.jpg',
        price: 180,
        addons: ['Avocado', 'Extra Lettuce', 'Tomato']
    },
    { 
        name: 'BBQ Chicken Burger', 
        category: 'Non-Vegetarian', 
        image: '/images/BBQ Chicken Burger.jpg',
        price: 270,
        addons: ['BBQ Sauce', 'Coleslaw', 'Onion Rings']
    },
    { 
        name: 'Mushroom Swiss Burger', 
        category: 'Vegetarian', 
        image: '/images/Mushroom Swiss Burger.jpg',
        price: 220,
        addons: ['Extra Mushrooms', 'Garlic Aioli', 'Spinach']
    },
    { 
        name: 'Spicy Jalapeno Burger', 
        category: 'Non-Vegetarian', 
        image: '/images/Spicy Jalapeno Burger.jpeg',
        price: 230,
        addons: ['Jalapeños', 'Pepper Jack Cheese', 'Chipotle Sauce']
    },
    { 
        name: 'Fish Burger', 
        category: 'Non-Vegetarian', 
        image: '/images/Fish Burger.jpg',
        price: 260,
        addons: ['Tartar Sauce', 'Lettuce', 'Tomato']
    },
    { 
        name: 'Paneer Tikka Burger', 
        category: 'Vegetarian', 
        image: '/images/Paneer Tikka Burger.avif',
        price: 210,
        addons: ['Mint Chutney', 'Onion', 'Lettuce']
    },
    { 
        name: 'Double Decker Burger', 
        category: 'Non-Vegetarian', 
        image: '/images/Double Decker Burger.avif',
        price: 350,
        addons: ['Extra Patty', 'Extra Cheese', 'Special Sauce']
    },
];

function Burger() {
    const [searchTerm,setSearchTerm]=useState('')
    const filteredBurger = burgerList.filter(burger =>
        burger.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const {addToCart} = useContext(CartContext)
  return (
    <>
     <div className="wrapper">
            <h1>Burger Varieties</h1>
            <input
                type="text"
                placeholder="Search for burger..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredBurger.map((burger, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/burger/${burger.name}`}>
                        <img src={burger.image} alt={burger.name} className="wrapper-image" /></Link> 
                        <div>
                            <h2>{burger.name}</h2>
                            <h2>{burger.price} RS</h2>
                            <p>Category: {burger.category}</p>  
                            <button onClick={() => addToCart(burger)}>Add to Cart</button>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Burger
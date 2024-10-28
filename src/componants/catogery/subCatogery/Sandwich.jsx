import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../../context/UserContext';
const sandwichList = [
    { 
        name: 'Club Sandwich', 
        category: 'Non-Vegetarian', 
        image: '/images/Club Sandwich.jpg',
        price: 250,
        addons: ['Extra Bacon', 'Avocado', 'Cheese']
    },
    { 
        name: 'Veggie Sandwich', 
        category: 'Vegetarian', 
        image: '/images/Veggie Sandwich.jpeg',
        price: 200,
        addons: ['Hummus', 'Avocado', 'Sprouts']
    },
    { 
        name: 'Grilled Cheese Sandwich', 
        category: 'Vegetarian', 
        image: '/images/Grilled Cheese Sandwich.jpg',
        price: 220,
        addons: ['Tomato', 'Basil', 'Extra Cheese']
    },
    { 
        name: 'Chicken Sandwich', 
        category: 'Non-Vegetarian', 
        image: '/images/Chicken Sandwich.jpg',
        price: 280,
        addons: ['Lettuce', 'Tomato', 'Mayo']
    },
    { 
        name: 'Tuna Sandwich', 
        category: 'Non-Vegetarian', 
        image: '/images/Tuna Sandwich.jpeg',
        price: 300,
        addons: ['Pickles', 'Onions', 'Lettuce']
    },
    { 
        name: 'BLT Sandwich', 
        category: 'Non-Vegetarian', 
        image: '/images/BLT Sandwich.jpg',
        price: 270,
        addons: ['Extra Bacon', 'Lettuce', 'Tomato']
    },
    { 
        name: 'Caprese Sandwich', 
        category: 'Vegetarian', 
        image: '/images/Caprese Sandwich.jpg',
        price: 240,
        addons: ['Basil', 'Balsamic Glaze', 'Mozzarella']
    },
    { 
        name: 'Pesto Chicken Sandwich', 
        category: 'Non-Vegetarian', 
        image: '/images/Pesto Chicken Sandwich.jpg',
        price: 320,
        addons: ['Extra Pesto', 'Cheese', 'Spinach']
    },
];
function Sandwich() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredSandwich = sandwichList.filter(sandwich =>
        sandwich.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const {addToCart} = useContext(CartContext)
  return (
    <>
     <div className="wrapper">
            <h1>Sandwich Varieties</h1>
            <input
                type="text"
                placeholder="Search for sandwich..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredSandwich.map((sandwich, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/sandwich/${sandwich.name}`}>
                        <img src={sandwich.image} alt={sandwich.name} className="wrapper-image" /></Link> 
                        <div>
                            <h2>{sandwich.name}</h2>
                            <h2>{sandwich.price} RS</h2>
                            <p>Category: {sandwich.category}</p> 
                            <button onClick={() => addToCart(sandwich)}>Add to Cart</button> 
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Sandwich
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const pizzaList = [
    { 
        name: 'Margherita Pizza', 
        category: 'Vegetarian', 
        image: '/images/Margherita Pizza.jpg',
        price: 250,
        addons: ['Extra Cheese', 'Olives', 'Basil']
    },
    { 
        name: 'Pepperoni Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Pepperoni Pizza.jpg',
        price: 300,
        addons: ['Extra Cheese', 'Chili Flakes', 'Garlic Sauce']
    },
    { 
        name: 'BBQ Chicken Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/BBQ Chicken Pizza.jpg',
        price: 320,
        addons: ['Onions', 'Jalapeños', 'Extra BBQ Sauce']
    },
    { 
        name: 'Veggie Supreme Pizza', 
        category: 'Vegetarian', 
        image: '/images/Veggie Supreme Pizza.jpeg',
        price: 280,
        addons: ['Mushrooms', 'Bell Peppers', 'Spinach']
    },
    { 
        name: 'Hawaiian Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Hawaiian Pizza.jpg',
        price: 350,
        addons: ['Extra Pineapple', 'Ham', 'Cheese Burst']
    },
    { 
        name: 'Four Cheese Pizza', 
        category: 'Vegetarian', 
        image: '/images/Four Cheese Pizza.jpeg',
        price: 330,
        addons: ['Extra Cheese', 'Basil', 'Olives']
    },
    { 
        name: 'Meat Lovers Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Meat Lovers Pizza.jpeg',
        price: 400,
        addons: ['Bacon', 'Sausage', 'Extra Cheese']
    },
    { 
        name: 'Pesto Veggie Pizza', 
        category: 'Vegetarian', 
        image: '/images/Pesto Veggie Pizza.jpg',
        price: 290,
        addons: ['Pesto Sauce', 'Arugula', 'Olives']
    },
];
function Pizza() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPizza = pizzaList.filter(pizza =>
        pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
    <div className="wrapper">
            <h1>Pizza Varieties</h1>
            <input
                type="text"
                placeholder="Search for Pizza..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredPizza.map((pizza, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/pizza/${pizza.name}`}>
                        <img src={pizza.image} alt={pizza.name} className="wrapper-image" /></Link> 
                        <div>
                            <h2>{pizza.name}</h2>
                            <h2>{pizza.price} RS</h2>
                            <p>Category: {pizza.category}</p>  
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Pizza
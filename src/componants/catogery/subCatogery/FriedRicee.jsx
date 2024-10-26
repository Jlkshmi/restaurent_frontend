import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const friedRiceList = [
    { 
        name: 'Vegetable Fried Rice', 
        category: 'Vegetarian', 
        image: '/images/Vegetable Fried Rice.jpg',
        price: 220,
        addons: ['Extra Tofu', 'Soy Sauce', 'Chili Oil']
    },
    { 
        name: 'Chicken Fried Rice', 
        category: 'Non-Vegetarian', 
        image: '/images/Chicken Fried Rice.jpg',
        price: 250,
        addons: ['Egg', 'Peas', 'Carrots']
    },
    { 
        name: 'Shrimp Fried Rice', 
        category: 'Non-Vegetarian', 
        image: '/images/Shrimp Fried Rice.jpeg',
        price: 300,
        addons: ['Green Onions', 'Soy Sauce', 'Lemon']
    },
    { 
        name: 'Egg Fried Rice', 
        category: 'Vegetarian', 
        image: '/images/Egg Fried Rice.jpg',
        price: 240,
        addons: ['Green Peppers', 'Soy Sauce', 'Chili Flakes']
    },
    { 
        name: 'Beef Fried Rice', 
        category: 'Non-Vegetarian', 
        image: '/images/Beef Fried Rice.jpg',
        price: 280,
        addons: ['Onions', 'Bell Peppers', 'Spices']
    },
    { 
        name: 'Thai Pineapple Fried Rice', 
        category: 'Vegetarian', 
        image: '/images/Thai Pineapple Fried Rice.jpeg',
        price: 300,
        addons: ['Cashews', 'Raisins', 'Curry Powder']
    },
    { 
        name: 'Chili Chicken Fried Rice', 
        category: 'Non-Vegetarian', 
        image: '/images/Chili Chicken Fried Rice.webp',
        price: 270,
        addons: ['Chili Sauce', 'Bell Peppers', 'Spring Onions']
    },
];
function FriedRicee() {
    const [searchTerm,setSearchTerm]=useState('')
    const filteredFriedrice = friedRiceList.filter(friedrice =>
        friedrice.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
   <>
   <div className="wrapper">
            <h1>Fried Rice Varieties</h1>
            <input
                type="text"
                placeholder="Search for friedrice..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredFriedrice.map((friedrice, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/friedrice/${friedrice.name}`}>
                        <img src={friedrice.image} alt={friedrice.name} className="wrapper-image" /></Link>
                        <div>
                            <h2>{friedrice.name}</h2>
                            <h2>{friedrice.price} RS</h2>
                            <p>Category: {friedrice.category}</p>  
                        </div>
                         
                    </li>
                ))}
            </ul>
        </div>
   </>
  )
}

export default FriedRicee
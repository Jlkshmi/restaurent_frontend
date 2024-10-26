import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const mandiList = [
    { 
        name: 'Chicken Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Chicken Mandi.webp',
        price: 300,
        addons: ['Raita', 'Salad', 'Chutney']
    },
    { 
        name: 'Lamb Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Lamb Mandi.webp',
        price: 400,
        addons: ['Raita', 'Salad', 'Grilled Vegetables']
    },
    { 
        name: 'Fish Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Fish Mandi.jpg',
        price: 350,
        addons: ['Raita', 'Lemon Wedges']
    },
    { 
        name: 'Shrimp Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Shrimp Mandi.avif',
        price: 380,
        addons: ['Raita', 'Chutney']
    },
    { 
        name: 'Beef Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Beef Mandi.webp',
        price: 360,
        addons: ['Raita', 'Salad']
    },
    { 
        name: 'Spicy Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Spicy Mandi.webp',
        price: 320,
        addons: ['Chili Sauce', 'Salad']
    },
    { 
        name: 'Mixed Mandi', 
        category: 'Non-Vegetarian', 
        image: '/images/Mixed Mandi.jpg',
        price: 450,
        addons: ['Raita', 'Chutney', 'Grilled Vegetables']
    },
  ];
function MandiRice() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredMandi = mandiList.filter(mandi =>
        mandi.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
     <div className="wrapper">
            <h1>Mandi Varieties</h1>
            <input
                type="text"
                placeholder="Search for mandi..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredMandi.map((mandi, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/mandi/${mandi.name}`}>
                        <img src={mandi.image} alt={mandi.name} className="wrapper-image" /> </Link> 
                        <div>
                            <h2>{mandi.name}</h2>
                            <h2>{mandi.price} RS</h2>
                            <p>Category: {mandi.category}</p>  
                        </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default MandiRice
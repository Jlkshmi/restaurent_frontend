import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const coolDrinksList = [
    { 
        name: 'Cola', 
        category: 'Carbonated', 
        image: '/images/Cola.jpeg',
        price: 50,
        addons: ['Lemon Slice', 'Ice']
    },
    { 
        name: 'Lemonade', 
        category: 'Non-Carbonated', 
        image: '/images/Lemonade.jpg',
        price: 60,
        addons: ['Mint', 'Sugar']
    },
    { 
        name: 'Iced Tea', 
        category: 'Non-Carbonated', 
        image: '/images/Iced Tea.jpeg',
        price: 70,
        addons: ['Lemon', 'Honey']
    },
    { 
        name: 'Mango Lassi', 
        category: 'Non-Carbonated', 
        image: '/images/Mango Lassi.avif',
        price: 80,
        addons: ['Cardamom', 'Sugar']
    },
    { 
        name: 'Sprite', 
        category: 'Carbonated', 
        image: '/images/sprite.jpg',
        price: 50,
        addons: ['Lime Slice', 'Ice']
    },
    { 
        name: 'Peach Iced Tea', 
        category: 'Non-Carbonated', 
        image: '/images/Peach Iced Tea.jpeg',
        price: 70,
        addons: ['Peach Slices', 'Mint']
    },
    { 
        name: 'Ginger Ale', 
        category: 'Carbonated', 
        image: '/images/Ginger Ale.jpg',
        price: 60,
        addons: ['Lime', 'Ice']
    },
    { 
        name: 'Fruit Punch', 
        category: 'Non-Carbonated', 
        image: '/images/Fruit Punch.jpg',
        price: 75,
        addons: ['Fruits', 'Mint']
    },
];
function Cooldrinks() {
    const [searchTerm,setSearchTerm]=useState('')
    const filteredCooldrinks = coolDrinksList.filter(cooldrinks =>
        cooldrinks.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <>
    <div className="wrapper">
            <h1>Cooldrinks Varieties</h1>
            <input
                type="text"
                placeholder="Search for cooldrinks..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredCooldrinks.map((cooldrinks, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/cooldrinks/${cooldrinks.name}`}>
                        <img src={cooldrinks.image} alt={cooldrinks.name} className="wrapper-image" /></Link> 
                        <div>
                            <h2>{cooldrinks.name}</h2>
                            <h2>{cooldrinks.price} RS</h2>
                            <p>Category: {cooldrinks.category}</p>  
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Cooldrinks
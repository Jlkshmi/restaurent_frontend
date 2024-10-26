import React, { useState } from 'react'
import "./subcatogery.css"
import { Link } from 'react-router-dom';

const biryaniList = [
        { 
            name: 'Hyderabadi Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/hyderabadi.webp',
            price: 250,
            addons: ['Raita', 'Salad', 'Biryani Masala']
        },
        { 
            name: 'Lucknowi Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/lucknowi.webp',
            price: 300,
            addons: ['Raita', 'Naan', 'Onion Salad']
        },
        { 
            name: 'Kolkata Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/kolkata-chicken-biryani.jpg',
            price: 270,
            addons: ['Egg', 'Aloo', 'Chutney']
        },
        { 
            name: 'Dum Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/kozhikode-dum-biriyani.avif',
            price: 320,
            addons: ['Raita', 'Chutney']
        },
        { 
            name: 'Vegetable Biryani', 
            category: 'Vegetarian', 
            image: '/images/vegitable.jpg',
            price: 200,
            addons: ['Raita', 'Papad']
        },
        { 
            name: 'Paneer Biryani', 
            category: 'Vegetarian', 
            image: '/images/paneer.jpeg',
            price: 250,
            addons: ['Raita', 'Naan']
        },
        { 
            name: 'Chicken Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/chicken biriyani.jpg',
            price: 300,
            addons: ['Raita', 'Salad', 'Chutney']
        },
        { 
            name: 'Egg Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/egg.jpg',
            price: 230,
            addons: ['Raita', 'Onion Salad']
        },
        { 
            name: 'Prawn Biryani', 
            category: 'Non-Vegetarian', 
            image: '/images/prawn.jpg',
            price: 350,
            addons: ['Raita', 'Chutney']
        },
    ];
  function Biriyani() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBiryanis = biryaniList.filter(biryani =>
      biryani.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="wrapper">
            <h1>Biryani Varieties</h1>
            <input
                type="text"
                placeholder="Search for biryani..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="wrapper-list">
                {filteredBiryanis.map((biryani, index) => (
                    <li key={index} className="wrapper-item">
                        <Link to={`/biriyani/${biryani.name}`}>
                        <img src={biryani.image} alt={biryani.name} className="wrapper-image" /></Link> 
                        <div>
                            <h2>{biryani.name}</h2>
                            <h2>{biryani.price} RS</h2>
                            <p>Category: {biryani.category}</p>  
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Biriyani;
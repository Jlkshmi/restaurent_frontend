import React, { useContext, useState } from 'react'
import CartContext from '../../../context/UserContext';
import { Link } from 'react-router-dom';

const juiceList = [
    { 
        name: 'Orange Juice', 
        category: 'Citrus', 
        image: '/images/Orange Juice.avif',
        price: 100,
        addons: ['Extra Sugar', 'Ice']
    },
    { 
        name: 'Apple Juice', 
        category: 'Fruity', 
        image: '/images/Apple Juice.avif',
        price: 120,
        addons: ['Mint', 'Ginger']
    },
    { 
        name: 'Carrot Juice', 
        category: 'Vegetable', 
        image: '/images/Carrot Juice.jpg',
        price: 150,
        addons: ['Lemon', 'Honey']
    },
    { 
        name: 'Pineapple Juice', 
        category: 'Tropical', 
        image: '/images/Pineapple Juice.avif',
        price: 130,
        addons: ['Coconut', 'Mint']
    },
    { 
        name: 'Mango Juice', 
        category: 'Tropical', 
        image: '/images/Mango Juice.avif',
        price: 140,
        addons: ['Chili Powder', 'Salt']
    },
];
function Juice() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredJuices = juiceList.filter(juice =>
        juice.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const { addToCart } = useContext(CartContext);

  return (
    <>
    <div className="wrapper">
                <h1>Juice Varieties</h1>
                <input
                    type="text"
                    placeholder="Search for juices..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <ul className="wrapper-list">
                    {filteredJuices.map((juice, index) => (
                        <li key={index} className="wrapper-item">
                            <Link to={`/juice/${juice.name}`}>
                                <img src={juice.image} alt={juice.name} className="wrapper-image" />
                            </Link>
                            <div>
                                <h2>{juice.name}</h2>
                                <h2>{juice.price} RS</h2>
                                <p>Category: {juice.category}</p>
                                <button onClick={() => addToCart(juice)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    </>
  )
}

export default Juice
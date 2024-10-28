import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

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
function JuicesDetails() {
    const { name } = useParams();
    const juice = juiceList.find(b => b.name === name);
    const [quantity, setQuantity] = useState(1);
    const [addonQuantities, setAddonQuantities] = useState({});
    const [size, setSize] = useState('medium');
    const [iceLevel, setIceLevel] = useState('medium');
    const [sugarLevel, setSugarLevel] = useState('medium');
  
    const handleQuantityChange = (e) => {
        const value = Math.max(1, e.target.value);
        setQuantity(value);
    };
    const handleAddonQuantityChange = (addon, e) => {
        const value = Math.max(0, e.target.value);
        setAddonQuantities({
            ...addonQuantities,
            [addon]: value,
        });
    };
    const totalAddonCost = Object.keys(addonQuantities).reduce((total, addon) => {
        return total + (addonQuantities[addon] * 50);
    }, 0);
    const totalPrice = (juice.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{juice.name}</h1>
            <img src={juice.image} alt={juice.name} className='detail_image' />
            <h2>Category: {juice.category}</h2>
            <h3>Price: ₹{juice.price}</h3>
            <div className="quantity">
                <label>Quantity:</label>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange} 
                    min="1" 
                />
            </div>
            <div className="size">
                    <h3>Size:</h3>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div className="ice-level">
                    <h3>Ice Level:</h3>
                    <select value={iceLevel} onChange={(e) => setIceLevel(e.target.value)}>
                        <option value="ice-less">Ice-less</option>
                        <option value="medium">Medium</option>
                        <option value="more ice">More Ice</option>
                    </select>
                </div>
                <div className="sugar-level">
                    <h3>Sugar Level:</h3>
                    <select value={sugarLevel} onChange={(e) => setSugarLevel(e.target.value)}>
                        <option value="no sugar">No Sugar</option>
                        <option value="medium">Medium</option>
                        <option value="more sugar">More Sugar</option>
                    </select>
                </div>
            <h3>Addons (₹50 each):</h3>
            <div className="addons">
                {juice.addons.map(addon => (
                    <div key={addon}>
                        <label>
                            {addon}
                            <input 
                                type="number" 
                                value={addonQuantities[addon] || 0} 
                                onChange={(e) => handleAddonQuantityChange(addon, e)} 
                                min="0" 
                            />
                        </label>
                    </div>
                ))}
            </div>
            <h3>Total Price: ₹{totalPrice}</h3>
            <Link to={{
                pathname: '/juiceorder',
                state: { orderDetails: { name: juice.name,totalPrice, addons: addonQuantities } }
            }}>
                <button>Order Now</button>
            </Link>
        </div>
    </>
  )
}

export default JuicesDetails
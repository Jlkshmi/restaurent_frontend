import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
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
function SandwichDetails() {
    const { name } = useParams();
  const sandwich = sandwichList.find(b => b.name === name);
  const [quantity, setQuantity] = useState(1);
  const [addonQuantities, setAddonQuantities] = useState({});
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
const totalPrice = (sandwich.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{sandwich.name}</h1>
            <img src={sandwich.image} alt={sandwich.name} className='detail_image' />
            <h2>Category: {sandwich.category}</h2>
            <h3>Price: ₹{sandwich.price}</h3>
            <div className="quantity">
                <label>Quantity:</label>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange} 
                    min="1" 
                />
            </div>
            <h3>Addons (₹50 each):</h3>
            <div className="addons">
                {sandwich.addons.map(addon => (
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
        </div>
    </>
  )
}

export default SandwichDetails
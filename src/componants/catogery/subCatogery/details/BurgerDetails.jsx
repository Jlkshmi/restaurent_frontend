import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
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

function BurgerDetails() {
    const { name } = useParams();
    const burger = burgerList.find(b => b.name === name);
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
    const totalPrice = (burger.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{burger.name}</h1>
            <img src={burger.image} alt={burger.name} className='detail_image' />
            <h2>Category: {burger.category}</h2>
            <h3>Price: ₹{burger.price}</h3>
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
                {burger.addons.map(addon => (
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

export default BurgerDetails
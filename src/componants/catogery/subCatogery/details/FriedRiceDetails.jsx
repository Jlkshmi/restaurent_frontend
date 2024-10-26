import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
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
function FriedRiceDetails() {
    const { name } = useParams();
  const friedrice = friedRiceList.find(b => b.name === name);
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
  const totalPrice = (friedrice.price * quantity) + totalAddonCost;
  return (
   <>
   <div className="detail">
            <h1>{friedrice.name}</h1>
            <img src={friedrice.image} alt={friedrice.name} className='detail_image' />
            <h2>Category: {friedrice.category}</h2>
            <h3>Price: ₹{friedrice.price}</h3>
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
                {friedrice.addons.map(addon => (
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

export default FriedRiceDetails
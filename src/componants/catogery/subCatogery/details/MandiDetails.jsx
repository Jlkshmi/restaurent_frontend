import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

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
function MandiDetails() {
  const { name } = useParams();
  const mandi = mandiList.find(b => b.name === name);
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
  const totalPrice = (mandi.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{mandi.name}</h1>
            <img src={mandi.image} alt={mandi.name} className='detail_image' />
            <h2>Category: {mandi.category}</h2>
            <h3>Price: ₹{mandi.price}</h3>
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
                {mandi.addons.map(addon => (
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

export default MandiDetails
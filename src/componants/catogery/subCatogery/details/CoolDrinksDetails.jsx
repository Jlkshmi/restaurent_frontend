import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
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
function CoolDrinksDetails() {
    const { name } = useParams();
  const cooldrinks = coolDrinksList.find(b => b.name === name);
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
  const totalPrice = (cooldrinks.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{cooldrinks.name}</h1>
            <img src={cooldrinks.image} alt={cooldrinks.name} className='detail_image' />
            <h2>Category: {cooldrinks.category}</h2>
            <h3>Price: ₹{cooldrinks.price}</h3>
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
                {cooldrinks.addons.map(addon => (
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

export default CoolDrinksDetails
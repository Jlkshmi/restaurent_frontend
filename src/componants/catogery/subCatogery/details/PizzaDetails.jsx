import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
const pizzaList = [
    { 
        name: 'Margherita Pizza', 
        category: 'Vegetarian', 
        image: '/images/Margherita Pizza.jpg',
        price: 250,
        addons: ['Extra Cheese', 'Olives', 'Basil']
    },
    { 
        name: 'Pepperoni Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Pepperoni Pizza.jpg',
        price: 300,
        addons: ['Extra Cheese', 'Chili Flakes', 'Garlic Sauce']
    },
    { 
        name: 'BBQ Chicken Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/BBQ Chicken Pizza.jpg',
        price: 320,
        addons: ['Onions', 'Jalapeños', 'Extra BBQ Sauce']
    },
    { 
        name: 'Veggie Supreme Pizza', 
        category: 'Vegetarian', 
        image: '/images/Veggie Supreme Pizza.jpeg',
        price: 280,
        addons: ['Mushrooms', 'Bell Peppers', 'Spinach']
    },
    { 
        name: 'Hawaiian Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Hawaiian Pizza.jpg',
        price: 350,
        addons: ['Extra Pineapple', 'Ham', 'Cheese Burst']
    },
    { 
        name: 'Four Cheese Pizza', 
        category: 'Vegetarian', 
        image: '/images/Four Cheese Pizza.jpeg',
        price: 330,
        addons: ['Extra Cheese', 'Basil', 'Olives']
    },
    { 
        name: 'Meat Lovers Pizza', 
        category: 'Non-Vegetarian', 
        image: '/images/Meat Lovers Pizza.jpeg',
        price: 400,
        addons: ['Bacon', 'Sausage', 'Extra Cheese']
    },
    { 
        name: 'Pesto Veggie Pizza', 
        category: 'Vegetarian', 
        image: '/images/Pesto Veggie Pizza.jpg',
        price: 290,
        addons: ['Pesto Sauce', 'Arugula', 'Olives']
    },
];
function PizzaDetails() {
    const { name } = useParams();
  const pizza = pizzaList.find(b => b.name === name);
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
  const totalPrice = (pizza.price * quantity) + totalAddonCost;
  return (
    <>
    <div className="detail">
            <h1>{pizza.name}</h1>
            <img src={pizza.image} alt={pizza.name} className='detail_image' />
            <h2>Category: {pizza.category}</h2>
            <h3>Price: ₹{pizza.price}</h3>
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
                {pizza.addons.map(addon => (
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

export default PizzaDetails
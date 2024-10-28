import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./details.css"
import CartContext from '../../../../context/UserContext';

const biryaniList = [
    { 
        name: 'Hyderabadi Biryani', 
        category: 'Non-Vegetarian', 
        image: '/images/hyderabadi.webp',
        price: 250,
        addons: [ 'Raita','Salad', 'Biryani Masala']
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
function BiriyaniDetails() {
    const { name } = useParams();
    const biryani = biryaniList.find(b => b.name === name);
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
    const totalPrice = (biryani.price * quantity) + totalAddonCost;

    return (
        <div className="detail">
            <h1>{biryani.name}</h1>
            <img src={biryani.image} alt={biryani.name} className='detail_image' />
            <h2>Category: {biryani.category}</h2>
            <h3>Price: ₹{biryani.price}</h3>
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
                {biryani.addons.map(addon => (
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
    );
}

export default BiriyaniDetails
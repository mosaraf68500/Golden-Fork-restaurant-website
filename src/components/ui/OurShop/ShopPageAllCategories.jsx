import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';


const ShopPageAllCategories = () => {
    const [allMenu, setAllMenu] = useState([]); 
    const [displayItems, setDisplayItems] = useState([]); 
    const [activeCategory, setActiveCategory] = useState('salad');

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];


    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                setAllMenu(data);
            
                const initialItems = data.filter(item => item.category === 'salad');
                setDisplayItems(initialItems);
            })
            .catch(err => console.error("Error loading data:", err));
    }, []);


    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        const filtered = allMenu.filter(item => item.category === category);
        setDisplayItems(filtered);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 my-20">
           
            <div className="flex justify-center flex-wrap gap-4 md:gap-10 mb-12">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(cat)}
                        className={`pb-2 uppercase font-bold text-lg transition-all border-b-4 ${
                            activeCategory === cat 
                            ? "border-[#BB8506] text-[#BB8506]" 
                            : "border-transparent text-gray-500 hover:text-black"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayItems.map(item => (
                    <FoodCard 
                        key={item._id} 
                        item={item} 
                    />
                ))}
            </div>

            {displayItems.length === 0 && (
                <div className="text-center text-gray-400 text-xl mt-10">
                    No items available in this category.
                </div>
            )}
        </div>
    );
};

export default ShopPageAllCategories;
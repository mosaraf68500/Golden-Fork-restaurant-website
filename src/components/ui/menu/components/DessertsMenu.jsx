import React, { useEffect, useState } from 'react';
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';
import MenuItem from '../../../../ReuseableComponents/SharedSectionTitle/menuItem/MenuItem';

const DessertsMenu = () => {
    const [menu, setMenu] = useState([]);
    // Sob data show korar jonno state
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const dessertItems = data.filter(item => item.category === 'dessert');
                setMenu(dessertItems);
            })
            .catch(error => console.error("Error fetching menu:", error));
    }, []);

    // Logic: jodi showAll true hoy sob dekhabe, nahole sudhu prothom 4-ta
    const displayedMenu = showAll ? menu : menu.slice(0, 4);

    return (
        <section className="mb-12 max-w-screen-xl mx-auto px-4 mt-20">
            <SharedSectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            />

            {/* Responsive Grid Layout */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 my-10">
                {
                    displayedMenu.map(item => (
                        <MenuItem 
                            key={item._id} 
                            item={item} 
                        />
                    ))
                }
            </div>

            {/* Toggle Button */}
            <div className="text-center mt-10">
                {/* Jodi 4 tar kom item thake tahole button dekhabe na.
                  Button e click korle setShowAll(true) hobe.
                */}
                {!showAll && menu.length > 4 && (
                    <button 
                        onClick={() => setShowAll(true)}
                        className="btn btn-outline border-0 border-b-4 mt-4 uppercase text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                        See All Desserts
                    </button>
                )}

                {/* Optional: Order button jeta shop page e niye jabe */}
                {showAll && (
                    <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase text-black hover:bg-black hover:text-white transition-all duration-300">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                )}
            </div>
        </section>
    );
};

export default DessertsMenu;
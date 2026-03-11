import React, { useEffect, useState } from 'react';
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';

const RecommendsMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // Sudhu 'salad' category filter kora hoyeche
                const saladItems = data.filter(item => item.category === 'salad' || item.category==='drinks');
                // Prothom 3-ti item neya hoyeche
                setMenu(saladItems.slice(0, 3));
            });
    }, []);

    return (
        <section className="my-20 max-w-screen-xl mx-auto px-4">
            <SharedSectionTitle
                subHeading="Should Try"
                heading="Chef Recommends"
            />

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    menu.map(item => (
                        <div key={item._id} className="bg-[#F3F3F3] text-center flex flex-col items-center">
                            {/* Card Image */}
                            <figure className="w-full h-72 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover" 
                                />
                            </figure>

                            {/* Card Body */}
                            <div className="p-8 flex flex-col flex-grow items-center">
                                <h2 className="text-2xl font-bold text-[#151515] mb-2">{item.name}</h2>
                                <p className="text-[#151515] mb-6 flex-grow">{item.recipe}</p>
                                
                                {/* Button with Hover Effect */}
                                <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] uppercase text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:border-[#BB8506] transition-all px-8">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default RecommendsMenu;
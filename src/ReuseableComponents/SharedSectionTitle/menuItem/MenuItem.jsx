import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-4 items-start">
            {/* Image with Custom Shape */}
            <img 
                style={{ borderRadius: '0 200px 200px 200px' }} 
                className="w-[90px] bg-gray-200 object-cover h-[90px]" 
                src={image} 
                alt={name} 
            />
            
            <div className="flex-1">
                <div className="flex justify-between items-center border-b-[1px] border-dotted border-gray-400 pb-1">
                    <h3 className="uppercase text-[#151515] font-serif text-lg md:text-xl">
                        {name} ------------------
                    </h3>
                    <p className="text-[#BB8506] font-semibold">${price}</p>
                </div>
                <p className="text-[#737373] text-sm mt-2 leading-relaxed">
                    {recipe}
                </p>
            </div>
        </div>
    );
};

export default MenuItem;
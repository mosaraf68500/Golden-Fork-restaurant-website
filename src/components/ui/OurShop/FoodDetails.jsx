import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const FoodDetails = () => {
    const { id } = useParams(); // URL theke id nibe
    const navigate = useNavigate();
    const [food, setFood] = useState(null);

    useEffect(() => {
        // menu.json theke data fetch kora
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const singleFood = data.find(item => item._id === id);
                setFood(singleFood);
            })
            .catch(err => console.error("Error loading details:", err));
    }, [id]);

    if (!food) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg text-[#BB8506]"></span>
            </div>
        );
    }


    const handleOrderNow = () => {
    // Payment page-e food details pathano jate user dekhte pare se ki kinche
    navigate('/payment', { state: { foodItem: food } });
};


    const { name, image, price, recipe, category } = food;

    return (
        <div className="max-w-screen-xl mx-auto px-4 my-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#F3F3F3] p-6 md:p-12 shadow-sm rounded-lg">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Details Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex justify-between items-start">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#151515] uppercase">
                            {name}
                        </h1>
                        <span className="bg-[#BB8506] text-white px-6 py-2 rounded-full font-bold text-xl">
                            ${price}
                        </span>
                    </div>

                    <div className="badge badge-outline border-[#BB8506] text-[#BB8506] p-4 uppercase font-bold tracking-widest">
                        Category: {category}
                    </div>

                    <p className="text-[#737373] text-lg leading-relaxed italic">
                        "{recipe}"
                    </p>

                    <div className="divider"></div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* Go to Order Page with Category Context */}
                        <button 
    onClick={handleOrderNow}
    className="btn bg-[#111827] text-white hover:bg-[#BB8506] border-none px-10 uppercase transition-all"
>
    Order Now (Pay)
</button>

                        {/* Back Button */}
                        <button 
                            onClick={() => navigate(-1)}
                            className="btn btn-outline border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white px-10 uppercase"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
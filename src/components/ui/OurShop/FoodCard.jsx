import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({ item }) => {
 
    const { name, image, price, recipe, _id } = item;

    return (
        <div className="card w-full bg-[#F3F3F3] border-none rounded-none shadow-md relative group">
         
            <figure className="overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500" 
                />
            </figure>
            <p className="absolute right-5 top-5 bg-[#151515] text-white px-4 py-2 font-semibold">
                ${price}
            </p>

            
            <div className="card-body items-center text-center p-8">
                <h2 className="card-title text-2xl font-bold text-[#151515]">{name}</h2>
                <p className="text-[#737373] text-sm mb-4 leading-6">{recipe}</p>
                
                <div className="card-actions justify-center gap-4">
                 
                    <Link to={`/food-details/${_id}`}>
                        <button className="btn btn-outline border-0 border-b-4 border-[#1f2937] text-[#1f2937] bg-[#E8E8E8] hover:bg-[#BB8506] hover:border-[#BB8506] uppercase transition-all duration-300">
                            Details
                        </button>
                    </Link>

                    <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:border-[#BB8506] uppercase transition-all duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
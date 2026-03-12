import React, { useEffect, useState } from 'react'
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';
import MenuItem from '../../../../ReuseableComponents/SharedSectionTitle/menuItem/MenuItem';

const TodaysOffer = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem);
            })
            .catch(error => console.error("Error fetching menu:", error));
    }, []);

  return (
    <div>
      
     <section className="mb-12 max-w-screen-xl mx-auto px-4">
            <SharedSectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            />

            {/* Responsive Grid Layout */}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    menu.map(item => <MenuItem 
                        key={item._id} 
                        item={item} 
                    />)
                }
            </div>

            {/* View Full Menu Button */}
            <div className="text-center mt-10">
                <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase text-black hover:bg-black hover:text-white transition-all duration-300">
                   ORDER YOUR FAVOURITE FOOD
                </button>
            </div>
        </section>
    </div>
  )
}

export default TodaysOffer











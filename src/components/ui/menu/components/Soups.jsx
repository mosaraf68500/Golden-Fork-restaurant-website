import React, { useEffect, useState } from 'react';
import MenuItem from '../../../../ReuseableComponents/SharedSectionTitle/menuItem/MenuItem';

const Soups = () => {
    const [menu, setMenu] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category === 'soup');
                setMenu(items);
            })
    }, []);

    const displayedMenu = showAll ? menu : menu.slice(0, 4);

    return (
        <section className="mb-12 max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 my-10">
                {displayedMenu.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            <div className="text-center mt-10">
                {!showAll && menu.length > 4 ? (
                    <button onClick={() => setShowAll(true)} className="btn btn-outline border-0 border-b-4 uppercase">See All Soups</button>
                ) : (
                    <button className="btn btn-outline border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
                )}
            </div>
        </section>
    );
};

export default Soups;
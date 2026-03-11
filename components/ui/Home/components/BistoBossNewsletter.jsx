import React from 'react';
// Background image ta import koro (path thik kore nio)
import chefBg from '../../../../src/assets/home/chef-service.jpg';

const BistoBossNewsletter = () => {
    return (
        <section 
            className="my-20 p-10 md:p-20 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${chefBg})` }}
        >
            {/* White Content Box */}
            <div className="bg-white text-black text-center p-8 md:p-20 rounded-sm shadow-xl max-w-5xl mx-auto">
                <h2 className="text-4xl uppercase font-serif mb-4">
                    Bistro Boss
                </h2>
                <p className="text-base leading-relaxed max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                    libero accusamus laborum deserunt ratione dolor officiis praesentium! 
                    Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus 
                    incidunt quibusdam nemo.
                </p>
            </div>
        </section>
    );
};

export default BistoBossNewsletter;
import React from 'react';
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';
// Background image ebong featured image import (path thik kore nio)
import featuredImg from '../../../../assets/home/featured.jpg';

const OurMenuSection = () => {
    return (
        <section 
            className="relative bg-fixed bg-cover bg-center text-white my-20"
            style={{ backgroundImage: `url(${featuredImg})` }}
        >
            {/* Dark Overlay - Image ke ektu kalo korar jonno jate text sposto hoy */}
            <div className="bg-black/60 w-full h-full py-20 px-4 md:px-20 lg:px-36">
                
                <SharedSectionTitle
                    subHeading="---Check it out---"
                    heading="From Our Menu"
                />

                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 max-w-6xl mx-auto">
                    {/* Left Side: Image */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src={featuredImg} 
                            alt="Featured" 
                            className="rounded-sm shadow-xl" 
                        />
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full md:w-1/2 space-y-3">
                        <p className="text-xl">March 20, 2023</p>
                        <h3 className="uppercase text-2xl font-semibold">Where can I get some?</h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error 
                            voluptate facere, deserunt dolores maiores quod nobis quas 
                            quasi. Eaque repellat recusandae ad laudantium tempore 
                            consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 text-white uppercase mt-4 hover:bg-white hover:text-black transition-all">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMenuSection;
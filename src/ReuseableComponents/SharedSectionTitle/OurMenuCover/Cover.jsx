import React from 'react';

const Cover = ({ img, title, subTitle }) => {
    return (
        <div
            className="hero w-full h-[400px] md:h-[500px] bg-fixed bg-cover bg-center mb-10 md:mb-20"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
      
            <div className="hero-overlay bg-opacity-0"></div>
            
            <div className="hero-content text-center text-white">
                
                <div className="max-w-4xl bg-black/25 px-10 py-10 md:px-32 md:py-16 rounded-sm">
                    <h1 className="mb-5 text-2xl md:text-4xl font-serif font-bold uppercase tracking-widest">
                        {title}
                    </h1>
                    <p className="mb-5 text-sm md:text-md  font-sans tracking-widest opacity-95">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;



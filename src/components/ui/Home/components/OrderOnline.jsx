import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Autoplay module import koro (Eita add korte hobe)
import { Pagination, Autoplay } from 'swiper/modules'; 

import slide1 from '../../../../assets/home/slide1.jpg';
import slide2 from '../../../../assets/home/slide2.jpg';
import slide3 from '../../../../assets/home/slide3.jpg';
import slide4 from '../../../../assets/home/slide4.jpg';
import slide5 from '../../../../assets/home/slide5.jpg';
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';

const OrderOnline = () => {
    
    const slides = [
        { img: slide1, title: 'Salad' },
        { img: slide2, title: 'Soups' },
        { img: slide3, title: 'Pizzas' },
        { img: slide4, title: 'Desserts' },
        { img: slide5, title: 'Honey' },
    ];

    return (
        <section className="my-10 px-4 md:px-10">
            {/* Section Header */}
            <div>
                <SharedSectionTitle
                subHeading="From 11:00am to 10:00pm"
        heading="Order Online"
                ></SharedSectionTitle>
            </div>

            <Swiper
                slidesPerView={4}     
                spaceBetween={30}    
                pagination={{
                    clickable: true, 
                }}
                
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, 
                }}
                loop={true} 
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative mb-16">
                        <img 
                            src={slide.img} 
                            alt={slide.title} 
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                        <h3 className="absolute bottom-8 left-0 right-0 text-center text-white text-2xl uppercase font-semibold drop-shadow-2xl shadow-black">
                            {slide.title}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default OrderOnline;
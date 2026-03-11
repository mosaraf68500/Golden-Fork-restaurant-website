import React, { useEffect, useState } from 'react';
import SharedSectionTitle from '../../../../ReuseableComponents/SharedSectionTitle/SharedSectionTitle';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error("Error loading reviews:", err));
    }, []);

    return (
        <section className="my-20 max-w-screen-xl mx-auto px-4">
            <SharedSectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            />

            <div className="mt-10 relative">
                <Carousel
                    showArrows={true}        // Left-Right Arrow thakbe
                    showIndicators={false}   // Nicher DOTS gulo thakbe na
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}      // Ekebare shesh hole abar prothom theke shuru hobe
                    autoPlay={true}          // Click na korleo slide hobe
                    interval={5000}          // 5 second por por auto slide hobe
                    stopOnHover={true}       // Mouse rakhle thakbe
                    swipeable={true}
                    // Custom arrow styling er jonno className
                    className="testimonial-carousel"
                >
                    {
                        reviews.map(review => (
                            <div key={review._id} className="flex flex-col items-center px-16 md:px-32 lg:px-48 pb-10">
                                
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-6 text-2xl md:text-3xl">
                                    {[...Array(5)].map((_, i) => (
                                        <span 
                                            key={i} 
                                            className={i < review.rating ? 'text-[#CD9003]' : 'text-gray-300'}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                {/* Large Quote Icon */}
                                <div className="flex justify-center">
                                    <FaQuoteLeft className="text-5xl md:text-8xl text-[#151515] mb-6" />
                                </div>

                                {/* Review Text */}
                                <p className="text-[#444444] text-sm md:text-lg leading-relaxed text-center">
                                    {review.details}
                                </p>

                                {/* Reviewer Name */}
                                <h3 className="text-[#CD9003] text-xl md:text-3xl font-medium mt-4 uppercase">
                                    {review.name}
                                </h3>
                            </div>
                        ))
                    }
                </Carousel>
                
                {/* Arrows jate text er sathe lege na jay tai ektu CSS proyojon hote pare */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .testimonial-carousel .control-arrow {
                        font-size: 25px !important;
                        opacity: 1 !important;
                        color: #151515 !important;
                    }
                    .testimonial-carousel .control-next.control-arrow:before {
                        border-left: 12px solid #151515 !important;
                    }
                    .testimonial-carousel .control-prev.control-arrow:before {
                        border-right: 12px solid #151515 !important;
                    }
                    @media (max-width: 768px) {
                        .testimonial-carousel .control-arrow {
                            display: none; /* Mobile-e arrow bad diye swipe bhalo */
                        }
                    }
                ` }} />
            </div>
        </section>
    );
};

export default ReviewSection;
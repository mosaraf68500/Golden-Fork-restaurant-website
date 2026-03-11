import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// Images import
import img1 from '../../../../src/assets/home/01.jpg';
import img2 from '../../../../src/assets/home/02.jpg';
import img3 from '../../../../src/assets/home/03.png';
import img4 from '../../../../src/assets/home/04.jpg';
import img5 from '../../../../src/assets/home/05.png';
import img6 from '../../../../src/assets/home/06.png';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <Carousel 
                showArrows={true} 
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={true}  // Ekhane true kore deoya hoyeche thumbnail dekhate
                showStatus={false}
                interval={3000}
                thumbWidth={80}    // Thumbnail gulo koto boro hobe seta eikhan theke control kora jay
            >
                <div>
                    <img src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                </div>
                <div>
                    <img src={img4} alt="Slide 4" />
                </div>
                <div>
                    <img src={img5} alt="Slide 5" />
                </div>
                <div>
                    <img src={img6} alt="Slide 6" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroSection;
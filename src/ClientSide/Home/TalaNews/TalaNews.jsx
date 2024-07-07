/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TalaNews = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // Customizing the dots
        appendDots: dots => (
            <ul style={{ margin: "0px" }}> {dots} </ul>
        ),
        customPaging: i => (
            <div className="custom-dot"></div>
        )
    };

    return (
        <div className='sectionGap'>
            <h1 className='headingTagNormal'>Tala <span className='headingTagBold'>In News</span></h1>

            {/* slider news */}
            <div>
                <div className="slider-container pb-[19px]  overflow-hidden">
                    <Slider {...settings}>
                        <div>
                            <div className='talaNesSliderParent '>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                            <h3 className='cardSubHeading pt-[15px]'>Encouraging Craftsmanship</h3>
                            <p className='paraText pb-[10px]'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                        </div>
                        <div>
                            <div className='talaNesSliderParent '>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                            <h3 className='cardSubHeading pt-[15px]'>Encouraging Craftsmanship</h3>
                            <p className='paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                        </div>
                        <div>
                            <div className='talaNesSliderParent '>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                            <h3 className='cardSubHeading pt-[15px]'>Encouraging Craftsmanship</h3>
                            <p className='paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TalaNews;
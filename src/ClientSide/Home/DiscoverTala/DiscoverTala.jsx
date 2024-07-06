/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscoverTala.css"

const DiscoverTala = () => {
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
        <div>
            <div className='sectionGap'>
                <h1 className='headingTagNormal'>Discover <span className='headingTagBold'>Tala</span></h1>
                <p className='paraText py-[15px]'>
                    Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
                </p>
                <button className='commonBtn'>Know More</button>
                {/* slider  */}
                <div>
                    <div className="slider-container pb-[70px] overflow-hidden">
                        <Slider {...settings}>
                            <div className='discoverSliderParent mb-[25px]'>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                            <div className='discoverSliderParent'>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                            <div className='discoverSliderParent'>
                                <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* achiveMentSection */}
            <div className='bg-[#1c1c1c]'>
                <div className='acivementParent'>
                    <h2 className='headingTagNormal'>Lorem <span className='headingTagBold'>Ipsum</span></h2>

                    <p className='paraText pt-[15px] pb-[25px]'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>

                    {/* achivement contents */}

                    <div className='achivementContentParent'>
                        {/* ===== one === */}
                        <div>
                            <h3 className='achivementContentTile'>500K+</h3>
                            <p className='paraText'>Existing Partnerships</p>
                        </div>
                        {/* ===== two === */}
                        <div>
                            <h3 className='achivementContentTile'>5M</h3>
                            <p className='paraText'>Existing Partnerships</p>
                        </div>

                        {/* ===== three === */}
                        <div>
                            <h3 className='achivementContentTile'>500K+</h3>
                            <p className='paraText'>Existing Partnerships</p>
                        </div>

                        {/* ===== four === */}
                        <div>
                            <h3 className='achivementContentTile'>5M</h3>
                            <p className='paraText'>Award Winning</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DiscoverTala;

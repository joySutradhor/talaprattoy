/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Award.css";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const CustomPrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, onClick } = props;
    return (
        <button
            className={`customBtn customBtnLeft ${className}`}
            onClick={onClick}
        >
            <LuMoveLeft />
        </button>
    );
};

const CustomNextArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, onClick } = props;
    return (
        <button
            className={`customBtn customBtnRight ${className}`}
            onClick={onClick}
        >
            <LuMoveRight />
        </button>
    );
};

const Award = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 700,
        cssEase: "linear",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className='sectionGap'>
            <h2 className='headingTagBold'>Award</h2>
            <p className='paraText pt-[15px] pb-[25px]'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
            {/* logo slider */}
            <div className="slider-container overflow-hidden pb-[60px]">
                <Slider {...settings}>
                    <div className='flex justify-center items-center w-full'>
                        <div className='awardSliderParent'>
                            <img className='h-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720300336/talaPrattoy/logoimg_qyo4yr.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='awardSliderParent'>
                            <img className='h-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720300336/talaPrattoy/logoimg_qyo4yr.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='awardSliderParent'>
                            <img className='h-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720300336/talaPrattoy/logoimg_qyo4yr.png" alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Award;

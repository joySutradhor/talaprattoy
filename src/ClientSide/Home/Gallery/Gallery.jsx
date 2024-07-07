// eslint-disable-next-line no-unused-vars
import React from 'react';

const Gallery = () => {
    return (
        <div className='sectionGap'>
            <h2 className='headingTagBold'>Gallery</h2>

            <p className='paraText pt-[15px] pb-[25px]'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>

            {/* ================= galarry img =========== */}
            <div className='space-y-[7px]'>
                <div className='galleryCardParent'>
                    <div className='h-[110px] w-[232px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>
                    <div className='h-[110px] w-[125px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>
                </div>
                {/* ============second row -======= */}
                <div className='galleryCardParent'>

                    <div className='h-[110px] w-[125px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>

                    <div className='h-[110px] w-[232px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>

                </div>
                {/* ============third row -======= */}
                <div className='galleryCardParent'>
                    <div className='h-[110px] w-[232px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>
                    <div className='h-[110px] w-[125px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>
                </div>

                {/* ============fourth row -======= */}
                <div className='galleryCardParent'>

                    <div className='h-[110px] w-[125px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>

                    <div className='h-[110px] w-[232px]'>
                        <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720297407/talaPrattoy/sliderImg_bl4rtt.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Objective = () => {
    const slides = [
        {
            imageUrl: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1720360508/talaPrattoy/overlayImg_fghaek.jpg",
            title: "Durga Puja Art 2024",
            description: "2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times."
        },
        {
            imageUrl: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1720360508/talaPrattoy/overlayImg_fghaek.jpg",
            title: "Durga Puja Art 2025",
            description: "2025 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times."
        },
        {
            imageUrl: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1720360508/talaPrattoy/overlayImg_fghaek.jpg",
            title: "Durga Puja Art 2026",
            description: "2026 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times."
        }
    ];

    return (
        <div className='sectionGap'>
            <h1 className='headingTagNormal'>Objective <span className='headingTagBold'>& features</span></h1>
            <p className='paraText py-[60px]'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>

            {/* features card */}
            <div className='space-y-[60px]'>
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className='bg-no-repeat bg-cover bg-center h-[430px] rounded-[5px]'
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                        <div className='featuresContentParent'>
                            <div>
                                <h3 className='cardSubHeading'>{item.title}</h3>
                                <p className='paraText'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Objective;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Faq = () => {

    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className='sectionGap'>
            <h1 className='headingTagNormal pr-[26%]'>frequently <span className='headingTagBold'>asked questions</span></h1>

            {/* =============faq section ========== */}

            <div className='pt-[30px] space-y-[10px]'>
                {/* faq one  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(1)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 1 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 1 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* faq two  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(2)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 2 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 2 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* faq three  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(3)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 3 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 3 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* faq four  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(4)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 4 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 4 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* faq five  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(5)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 5 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 5 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* faq six  */}
                <div className='bg-[#1d1d1d] rounded-[10px]'>
                    <div className='text-white px-[15px] pt-[15px] pb-[12px] '>
                        <div
                            className="flex justify-between items-center cursor-pointer pb-[11px]"
                            onClick={() => toggleAccordion(6)}
                        >
                            <div className='flex space-x-[15px] items-center'>
                                <p><FaArrowRightLong className='text-red-600'></FaArrowRightLong></p>
                                <h6 className=" relative z-20 faqTitle">Do you creative design for website</h6>
                            </div>
                            <span className="transform transition-transform duration-300 ease-linear">
                                {openAccordion === 6 ? <div className='faqIconParent'><IoIosArrowDown className='text-white text-[12px]' /></div> : <div className='faqIconParent'><IoIosArrowUp className='text-white text-[12px]' /></div>}
                            </span>
                        </div>
                        {openAccordion === 6 && (
                            <div>
                                <p className='pl-[32px] paraText'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
                            </div>
                        )}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Faq;
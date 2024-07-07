// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";





const FooterSection = () => {
    return (
        <div className='bg-[#1A1A1A] mt-[60px]'>
            <div className='footerContentParent'>
                {/* <img className='h-full w-full ' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1720300336/talaPrattoy/logoimg_qyo4yr.png" alt="" /> */}
                <h2 className='text-[15px] leading-[15px] text-white'>Footer Logo</h2>
                <p className='paraText py-[25px]'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                {/* footer content sections */}

                <h3 className='text-[16px] leading-[24px] font-Josefin font-bold pb-[15px] text-white'>Join Newsletters</h3>

                <div className='relative inline-block'>
                    <input type="text" placeholder='Insert your mail here' className='bg-[#525252] rounded-[5px] paraText py-[9px] pl-[15px] pr-[40px]' />
                    <div className='bg-red-500 h-full flex justify-center items-center absolute top-0 right-0 px-2 rounded-r-[5px] cursor-pointer focus:outline-transparent'>
                        <FaLongArrowAltRight className='text-white'></FaLongArrowAltRight>
                    </div>
                </div>

                {/* ================= footer menu and items  */}
                <div className='py-[35px]'>
                    <div className='flex space-x-[85px]'>
                        <div>
                            <h2 className='footerTitle'>Product</h2>
                            <div className='flex flex-col gap-y-[10px]'>
                                <Link className='footerMenu'>Movies</Link>
                                <Link className='footerMenu'>Tv Show</Link>
                                <Link className='footerMenu'>Videos</Link>
                            </div>
                        </div>
                        {/* ==============media ============== */}
                        <div>
                            <h2 className='footerTitle'>Media Group</h2>
                            <div className='flex flex-col gap-y-[10px]'>
                                <Link className='footerMenu'>Nice Studio</Link>
                                <Link className='footerMenu'>Nice News</Link>
                                <Link className='footerMenu'>Nice TV</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============sitemap and contact */}
                <div className='flex space-x-[85px]'>
                    <div>
                        <h2 className='footerTitle'>Sitemap</h2>
                        <div className='flex flex-col gap-y-[10px]'>
                            <Link className='footerMenu'>About</Link>
                            <Link className='footerMenu'>Careers</Link>
                            <Link className='footerMenu'>Press</Link>
                        </div>
                    </div>
                    {/* ==============media ============== */}
                    <div>
                        <h2 className='footerTitle'>Media Group</h2>
                        <div className='flex flex-col gap-y-[10px]'>
                            <Link className='footerMenu'><span className='flex items-center gap-x-[8px]'> <span><IoCallSharp></IoCallSharp></span>  +271 386-647-3637</span></Link>

                            <Link className='footerMenu'><span className='flex items-center gap-x-[8px]'> <span><IoMdMail></IoMdMail></span>  ourstudio@hello.com</span></Link>

                            <Link className='footerMenu'><span className='flex  gap-x-[8px]'> <span><IoLocationSharp></IoLocationSharp></span>  8819 Ohio St. South Gate, California 90280</span></Link>
                        </div>
                    </div>
                </div>
                <p className='paraText text-[#E6E6E6] mt-[35px]'>Copyright © 2024 massArt, Designed & Developed Ethically by <span><Link className='underline' to="https://www.ethicalden.com/" target='_blank'>Ethical Den </Link></span></p>

            </div>
        </div>
    );
};

export default FooterSection;
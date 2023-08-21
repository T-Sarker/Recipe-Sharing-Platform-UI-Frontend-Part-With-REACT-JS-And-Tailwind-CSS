import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Hero = () => {
    let imgArray = [
        {
            url: 'https://elpollonorteno.net/wp-content/uploads/ElPolloNorteno-3-4-20-1300x650.jpg'
        },
        {
            url: 'https://discoverhalifaxns.com/wp-content/uploads/2023/04/Dave-and-Sky-Lobster-Roll-1300x650-c-default.png'
        },
        {
            url: 'https://niceneasy.group/wp-content/uploads/2020/01/hp_brands_002_nne_athens_kifisia-1300x650.jpg'
        }
    ];

    const [slideNumber, setSlideNumber] = useState(0)

    const prev = (currentSlide) => {
        if (currentSlide > 0) {
            setSlideNumber(currentSlide - 1)
        }

        if (currentSlide === 0) {
            setSlideNumber(imgArray.length - 1)
        }
    }

    const next = (currentSlide) => {

        if (currentSlide >= 0 && currentSlide < (imgArray.length - 1)) {
            setSlideNumber(currentSlide + 1)
        }

        if (currentSlide >= (imgArray.length - 1)) {
            setSlideNumber(0)
        }
    }
    return (
        <>
            <div className="heroBanner my-10">
                <div className="relative group">
                    <img className='w-[100%] h-full md:h-[650px]' src={`${imgArray[slideNumber].url}`} />
                    <div className="buttonGroup  absolute flex items-center w-full justify-between top-1/2 z-20">
                        <FaAngleLeft onClick={() => { prev(slideNumber) }} className='text-2xl text-white font-light bg-black rounded-full hidden group-hover:block ' />
                        <FaAngleRight onClick={() => { next(slideNumber) }} className='text-2xl text-white font-light bg-black rounded-full hidden group-hover:block ' />
                    </div>

                    <div className="heroPost md:max-w-[550px] opacity-90 left-[10%] absolute top-[9%] md:top-[20%] md:left-[15%] p-4 bg-transparent bg-indigo-100">
                        <div className="category text-black md:text-black uppercase">VEGAN</div>
                        <div className="postTitle">
                            <h3 className='text-sm md:text-3xl text-black font-bold md:text-black  max-w-[250PX] md:max-w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <p className='text-md my-2 hidden md:block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet consectetur adipisicing elit. Ratione provident dignissimos illum.</p>
                            <div className="author flex justify-between items-center my-1 md:my-8">
                                <div className="authorIMG flex">
                                    <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[50px] rounded-full" alt="author" />
                                    <div className="authorDetails ml-5 text-sm text-black md:text-black">
                                        <p>fkc tfhgfhgf</p>
                                        <p>fkh fkhf</p>
                                    </div>
                                </div>
                                <p className="bg-blue-900 text-white px-5 capitalize py-2">Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

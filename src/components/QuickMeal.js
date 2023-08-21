import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaThumbsDown, FaThumbsUp, FaRegMessage } from "react-icons/fa6";

const QuickMeal = () => {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="containerx my-10">
                {/* quick recipe */}
                <div className="text-2xl font-extrabold my-2">Quick Meal</div>
                <Carousel responsive={responsive} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} swipeable={false}>


                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/party-pack_a-350x350.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>


                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/Screen-Shot-2020-01-09-at-5.11.16-PM-1-350x350.png" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://newtriernews.org/wp-content/uploads/2019/09/Bartaco.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>


                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/Bartaco_166-350x350.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>


                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/BARTACO_097_jv2-copy-scaled-e1602688585380-350x350.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/bartaco_12south_0249-350x350.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>


                        </div>
                    </div>

                    <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                        <img src="https://bartaco.com/media/group-eats-A-350x350.jpg" alt="" />
                        <div className="preHeading flex justify-between items-center py-2 text-gray-800 font-semibold text-sm">
                            <span>Category</span>

                        </div>
                        <div className="postTitle">
                            <h3 className='text-black font-bold text-2xl my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>


                        </div>
                    </div>


                </Carousel>;
            </div>
        </>
    )
}

export default QuickMeal

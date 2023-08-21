import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaThumbsDown, FaThumbsUp, FaRegMessage } from "react-icons/fa6";

const Popular = () => {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <div className="containerx my-10">
            {/* pupular recipe */}

            <Carousel ssr responsive={responsive} mouseDragToSlide={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} swipeable={false}>


                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/party-pack_a-350x350.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/Screen-Shot-2020-01-09-at-5.11.16-PM-1-350x350.png" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://newtriernews.org/wp-content/uploads/2019/09/Bartaco.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/Bartaco_166-350x350.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/BARTACO_097_jv2-copy-scaled-e1602688585380-350x350.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/bartaco_12south_0249-350x350.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] my-4 mx-2 shadow-sm p-2">
                    <img src="https://bartaco.com/media/group-eats-A-350x350.jpg" alt="" />
                    <div className="preHeading flex justify-between items-center py-2 text-gray-400 text-sm">
                        <span>Category</span>
                        <FaThumbsUp />(0)
                        <FaThumbsDown />(0)
                        <FaRegMessage />(0)
                    </div>
                    <div className="postTitle">
                        <h3 className='text-black font-bold text-lg my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className='text-md my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident dignissimos illum. sit amet</p>
                        <div className="author flex justify-between items-center my-8">
                            <div className="authorIMG flex justify-center items-center">
                                <img src="https://images.prismic.io/statrys/2023e466-d11d-4323-ac35-f71d8c839ad2_Adrian+Volenik+author.png?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=128&h=128" className="max-w-[30px] rounded-full" alt="author" />
                                <div className="authorDetails ml-5">
                                    <p>fkc tfhgfhgf hjg </p>
                                </div>
                            </div>
                            <p className="">November 2022</p>
                        </div>
                    </div>
                </div>


            </Carousel>;
        </div>
    )
}

export default Popular

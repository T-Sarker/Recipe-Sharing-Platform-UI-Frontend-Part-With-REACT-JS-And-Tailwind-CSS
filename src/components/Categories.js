import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='containerx my-10'>
            <p className="text-lg font-bold uppercase">Browse by category</p>
            <Carousel responsive={responsive} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} swipeable={false}>

                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>
                <div className="my-4 mx-2 shadow-sm p-2 text-center">
                    <img src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg" alt="" className='rounded-full' />
                    <p className="text-lg text-bold uppercase">category</p>
                </div>



            </Carousel>;
        </div>
    )
}

export default Categories

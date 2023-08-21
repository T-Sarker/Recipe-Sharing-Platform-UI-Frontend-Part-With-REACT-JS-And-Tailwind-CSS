import React, { useState } from 'react'
import { FaMagnifyingGlass, FaAlignJustify, FaDeskpro } from "react-icons/fa6";
const Header = () => {
    const [showMenu, setshowMenu] = useState(false)
    console.log(showMenu);
    return (
        <>
            {/* large menu */}
            <div className="mainNav bg-white hidden md:block">
                <div className="flex justify-between px-8 py-4 text-black items-center">
                    <p className="flex align-middle items-center justify-center text-2xl  font-bold uppercase">hobolo <span><FaDeskpro /></span></p>
                    <div className="flex justify-between items-center">
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Home</a>
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Feature</a>
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Apetiser</a>
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Desserts</a>
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Blog</a>
                        <a href="" className='px-4 text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Contact</a>
                    </div>

                    <div className="searchBar flex items-center relative group">
                        <input type='text' className='bg-gray-200 px-3 py-2 rounded-3xl text-black' />
                        <FaMagnifyingGlass className='text-2xl text-gray-500 absolute left-3/4 group-hover:opacity-5' />
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className="mobileMenu md:hidden relative">
                <div className="flex justify-between px-8 py-4 text-black items-center">
                    <p className="text-4xl  font-bold">hobolo</p>
                    <FaAlignJustify onClick={() => { setshowMenu(!showMenu) }} />
                </div>

                <div className={`block  bg-blue-900 absolute top-0 left-0 h-screen px-10 ${showMenu ? 'left-[0px]' : 'left-[-300px]'}`}>
                    <div className="mt-10">
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Home</a></p>
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Feature</a></p>
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Apetiser</a></p>
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Desserts</a></p>
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Blog</a></p>
                        <p className='text-white text-bold text-lg mt-4 hover:bg-gray-700 hover:text-yellow-500 rounded-md'><a href="" className='text-lg text-semibold hover:bg-gray-700 hover:text-yellow-500 rounded-md px-3'>Contact</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header

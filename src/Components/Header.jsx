import React from 'react'
import { IoCaretDownSharp, IoCaretForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";



function Header() {
    return (
        <header className='w-full shadow-2xs bg-white  fixed  z-50'>
            {/* Full width header */}
            <div className="max-w-full hidden lg:flex justify-between items-center border-b border-gray-200 mx-auto px-6">
                {/* logo */}
                <a href="">  <div className='text-[42px] leading-0.5 tracking-tighter flex justify-center items-center py-2 px-2 pr-8 font-bold border-r border-gray-300 h-21 text-[#f8cb46] '>blink
                    <span className='text-[#54b226] '>it</span>
                </div></a>
                {/*Time & Address*/}
                <div className='px-12 pt-1'>
                    <span className='font-bold text-lg  tracking-wide ' >Delivery in 8 minutes</span>
                    <p className='flex justify-center items-center
                    text-sm '>A-17, Murti Kala Colony Vasund...
                        <IoCaretDownSharp className='ml-3 mx-auto' />

                    </p>
                </div>
                {/* Search Bar */}
                <div className='bg-gray-100 flex-1 flex py-1.5 px-6 rounded-xl border border-gray-200 items-center gap-1'>
                    <CiSearch className='text-2xl pt-0.5 -ml-2 font-bold ' />
                    <input type="text" className=' p-1 w-full outline-none items-center' />
                </div>
                {/* Cart */}
                <div className='px-1 ml-12 space-x-6 flex gap-13'>
                    <button className=' mx-4 text-lg '><a href="#">Login</a> </button>
                    <button className=' font-bold px-3 py-0.5 gap-2.5 bg-[#0c831f] rounded-lg  items-center inline-flex text-white  mx-2 my-4'>
                        <BsCart3 className='text-xl' />
                        <div className="flex flex-col tracking-tighter ">
                            15 items
                            <span className='-mt-1 -ml-5 pb-1'> ₹929</span>
                        </div>


                    </button>
                </div>


            </div>




            
            {/* Responsive Header */}
            <div className="max-w-full lg:hidden flex flex-col  border-b border-gray-200 mx-auto px-6 py-4">


                {/*Time & Address*/}
                <div className="flex justify-between mb-3">

                    <div className="flex-1 min-w-0">

                        <span className="font-bold text-lg block">
                            Delivery in 8 minutes
                        </span>

                        <div className="flex items-center gap-1 min-w-0">

                            <p className="truncate text-sm text-gray-700">
                                A-17, Murti Kala Colony, Vasundhara Colony, Gopal Pura Mode, Jaipur, Rajasthan 302018, India
                            </p>

                            <IoCaretDownSharp className="shrink-0 text-sm" />

                        </div>

                    </div>
                    <BsPersonCircle className="text-4xl shrink-0 ml-2" />

                </div>


                {/* Search Bar */}
                <div className='bg-gray-200 flex-1 flex py-2 px-6 rounded-xl items-center gap-1'>
                    <CiSearch className='text-lg' />
                    <input type="text" className='w-full mx-0 outline-none items-center' />
                </div>


                {/* Cart */}
                <div className=' px-1  space-x-6 flex  gap-13'>
                    <button className='w-full font-bold px-3 py-0.5 gap-2.5 bg-[#0c831f] rounded-lg flex justify-between items-center text-white   my-4'>
                        <div className='flex flex-row gap-2 items-center justify-between'>
                            <BsCart3 className='text-xl' />
                            <div className="flex flex-col justify-items-start tracking-tighter ">
                                15 items
                                <span className='-mt-1 -ml-5 pb-1'> ₹2599</span>
                            </div>
                        </div>

                        <div className="flex flex-row tracking-tighter items-center p-3.5">
                            <div>View Cart</div>
                            <div className='mt-1 ml-1'><IoCaretForwardSharp /></div>

                        </div>

                    </button>

                </div>




            </div>
        </header>
    )
}

export default Header;
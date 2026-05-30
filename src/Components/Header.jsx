import React from 'react'
import { IoCaretDownSharp, IoCaretForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsCart3, BsPersonCircle } from "react-icons/bs";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between border-b border-gray-200 px-6 xl:px-10">

                {/* Logo */}
                <a href="#">
                    <div className="text-3xl xl:text-[42px] tracking-tighter flex items-center py-2 px-4 font-bold border-r border-gray-300 h-20 text-[#f8cb46]">
                        blink
                        <span className="text-[#54b226]">it</span>
                    </div>
                </a>

                {/* Address */}
                <div className="px-4 xl:px-10">
                    <span className="font-bold text-lg block">
                        Delivery in 8 minutes
                    </span>

                    <div className="flex items-center text-sm text-gray-700">
                        <span>A-17, Murti Kala Colony Vasund...</span>
                        <IoCaretDownSharp className="ml-2" />
                    </div>
                </div>

                {/* Search */}
                <div className="flex-1 bg-gray-100 border border-gray-200 rounded-xl flex items-center px-4 py-2 gap-2 min-w-[300px]">
                    <CiSearch className="text-2xl" />

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-transparent outline-none"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6 ml-8">
                    <button className="text-lg font-medium">
                        Login
                    </button>

                    <button className="bg-[#0c831f] rounded-xl px-4 py-2 flex items-center gap-3 text-white font-semibold">
                        <BsCart3 className="text-xl" />

                        <div className="flex flex-col leading-tight">
                            <span>15 items</span>
                            <span>₹929</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile / Tablet Header */}
            <div className="lg:hidden px-4 py-3 border-b border-gray-200">

                {/* Top */}
                <div className="flex justify-between items-start mb-3">

                    <div className="flex-1 min-w-0">

                        <span className="font-bold text-base sm:text-lg block">
                            Delivery in 8 minutes
                        </span>

                        <div className="flex items-center gap-1">

                            <p className="truncate text-xs sm:text-sm text-gray-700">
                                A-17, Murti Kala Colony, Vasundhara Colony, Jaipur
                            </p>

                            <IoCaretDownSharp className="shrink-0" />
                        </div>
                    </div>

                    <BsPersonCircle className="text-3xl sm:text-4xl ml-3 shrink-0" />
                </div>

                {/* Search */}
                <div className="bg-gray-100 border border-gray-200 rounded-xl flex items-center px-4 py-3 gap-2">

                    <CiSearch className="text-xl" />

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Cart */}
                <div className="mt-3">

                    <button className="w-full bg-[#0c831f] rounded-xl text-white flex justify-between items-center px-4 py-3">

                        <div className="flex items-center gap-3">

                            <BsCart3 className="text-xl" />

                            <div className="flex flex-col text-left leading-tight">
                                <span className="font-semibold">
                                    15 items
                                </span>

                                <span className="text-sm">
                                    ₹2599
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 font-semibold">
                            View Cart
                            <IoCaretForwardSharp />
                        </div>

                    </button>

                </div>
            </div>

        </header>
    )
}

export default Header
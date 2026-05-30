import React from 'react'
import { IoTimeOutline } from "react-icons/io5";

function ProductCard({ price, image, name, quantity }) {
    return (
        <div className='bg-white border border-gray-200 rounded-lg flex flex-col gap-2 p-2 sm:p-3 mx-1 sm:mx-2 hover:shadow-md transition-shadow duration-200'>

            {/* Product Image */}
            <div className='flex justify-center items-center h-24 sm:h-28 md:h-32 lg:h-36'>
                <img
                    className='max-h-full w-auto object-contain'
                    src={image}
                    alt={name}
                />
            </div>

            {/* Delivery Time */}
            <div className='bg-[#F8F8F8] flex items-center w-fit px-1.5 py-0.5 gap-1 rounded-sm font-bold text-[9px] sm:text-[10px] text-[#363636]'>
                <IoTimeOutline />
                <span>8 MINS</span>
            </div>

            {/* Product Name */}
            <div className='text-[#1f1f1f] font-semibold text-xs sm:text-sm line-clamp-2 min-h-[38px]'>
                {name}
            </div>

            {/* Quantity */}
            <div className='text-[11px] sm:text-xs text-gray-600 min-h-[20px]'>
                {quantity}
            </div>

            {/* Price & Button */}
            <div className='flex justify-between items-center mt-auto'>
                <div className='text-[#1f1f1f] font-semibold text-sm sm:text-base'>
                    ₹{price}
                </div>

                <button className='bg-green-50 px-3 sm:px-4 py-1 rounded-lg border border-[#0c831f] font-semibold text-[#0c831f] text-xs sm:text-sm hover:bg-green-100 transition-colors'>
                    ADD
                </button>
            </div>

        </div>
    )
}

export default ProductCard;
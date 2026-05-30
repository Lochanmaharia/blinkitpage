import React from 'react'
import { IoTimeOutline } from "react-icons/io5";


function ProductCard({ price, image, name, quantity }) {
    return (
        <div className=' bg-white border border-gray-200 rounded-lg text-sm flex flex-col m-2 gap-2 p-3 '>
            <img className='w-30 mx-auto' src={image} alt="" />

            <div className=' bg-[#F8F8F8] flex w-12.5 gap-0.5 rounded-sm justify-center font-bold text-[9px] text-[#363636]'>
                <IoTimeOutline className='mt-px font-extrabold' />
                <span className='rounded-sm  gap-0.5 '>8 MINS</span>
            </div>
            <div className=' overflow-hidden text-[#1f1f1f] font-semibold text-[13px] line-clamp-2 leading-4.5 w-full h-9 mb-1.5' >{name}</div>
            <div className='flex items-center h-6.5 w-full'>
                <span className="text-[12px] leading-none">{quantity}</span>
            </div>
            <div className='flex justify-between items-center p-0 -mt-1'>

                <div className='text-[rgb(31, 31, 31)] font-semibold text-xs'>₹{price}</div>
                <button className='bg-green-50 px-4 py-1 rounded-lg border border-[#0c831f] font-medium text-[#0c831f]'>ADD</button>
            </div>
        </div>
    )
}

export default ProductCard;
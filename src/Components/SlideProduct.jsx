import React from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideProduct({ products, title }) {



    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className='flex justify-between items-center'>
                <div className=' py-4 text-[rgb(28,28,28)] text-3xl font-semibold leading-8 font-okra'>{title}</div>
                <div className='text-xl text-[20px] leading-8 text-[#0c831f] font-okra'>see all</div>
            </div>
            <Slider {...settings}>
                {
                    products.map((data, index) => {
                        return (
                            <ProductCard key={index} name={data.name} image={data.images[0]} price={data.price} quantity={data.quantity} />

                        )
                    })
                }
            </Slider>
        </div >
    )
}

export default SlideProduct;

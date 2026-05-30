import React from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideProduct({ products, title }) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        swipeToSlide: true,
        slidesToShow: 6,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.8,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="max-w-7xl mx-auto mt-6 px-3 sm:px-4 md:px-6">
            <div className='flex justify-between items-center mb-2'>
                <div className='py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>{title}</div>
                <div className='text-sm sm:text-base md:text-lg text-[#0c831f] font-okra'>see all</div>
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

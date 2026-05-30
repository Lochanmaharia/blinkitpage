import React from 'react'

function Category() {

    const categories = [
        { name: "Wafer Chocolates", image: "https://cdn.grofers.com/da/cms-assets/cms/product/d2a6ef1e-2951-47a4-853b-798de2c8b4b9.png" },
        { name: "Filled Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e930270b-df49-4547-98fb-7a1e7d9eb35a.png" },
        { name: "Chocolate Packs", image: "https://cdn.grofers.com/da/cms-assets/cms/product/7daaea83-b276-4831-be30-366c38663add.png" },
        { name: "Chocolate Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/406269f4-afb7-4dbf-8272-75c315319420.png" },
        { name: "Stick", image: "https://cdn.grofers.com/da/cms-assets/cms/product/486f8b60-315e-46c7-acd3-6a362312cbcb.png" },
        { name: "Nutrition Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/7daaea83-b276-4831-be30-366c38663add.png" },
        { name: "Chocolate Gift Pack", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e7e9cf6d-16c3-4d3a-9e0f-b449434afe82.png" },
        { name: "Shaped Chocolates", image: "https://cdn.grofers.com/da/cms-assets/cms/product/39425fe0-8100-4ec3-950f-f2b75995ed09.png" },
        { name: "Cups", image: "https://cdn.grofers.com/da/cms-assets/cms/product/edc40da2-8b95-416c-9ab6-3452dce93543.png" },
        { name: "Croissant & Rolls", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e8a27e8a-e80f-40d2-8aa4-a34e5e715ab6.png" },
        { name: "Snacks & Munchies", image: "https://cdn.grofers.com/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png" },
        { name: "Fresh Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/ee25ea8f-8407-4821-87df-5415c18253cc.png" },
        { name: "Tetra Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png" },
        { name: "Poly Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/ee25ea8f-8407-4821-87df-5415c18253cc.png" },
        { name: "Filled Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e930270b-df49-4547-98fb-7a1e7d9eb35a.png" },
        { name: "Stick", image: "https://cdn.grofers.com/da/cms-assets/cms/product/486f8b60-315e-46c7-acd3-6a362312cbcb.png" },
        { name: "Cups", image: "https://cdn.grofers.com/da/cms-assets/cms/product/edc40da2-8b95-416c-9ab6-3452dce93543.png" },
        { name: "Chocolate Gift Pack", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e7e9cf6d-16c3-4d3a-9e0f-b449434afe82.png" },
        { name: "Snacks & Munchies", image: "https://cdn.grofers.com/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png" },
        { name: "Wafer Chocolates", image: "https://cdn.grofers.com/da/cms-assets/cms/product/d2a6ef1e-2951-47a4-853b-798de2c8b4b9.png" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mt-6 md:mt-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-5">
                {
                    categories.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105">
                            <div
                                className=" bg-[#ecf5fe] rounded-2xl p-2 md:p-3 w-full flex justify-center items-center">
                                <img
                                    className="w-full max-w-[90px] md:max-w-[110px] object-contain"
                                    src={data.image}
                                    alt={data.name}
                                />
                            </div>

                            <h6
                                className=" mt-2 md:mt-3 text-center text-[11px] sm:text-xs md:text-sm font-medium text-gray-800 line-clamp-2 min-h-[32px]">
                                {data.name}
                            </h6>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Category;
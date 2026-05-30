import React, { useEffect, useState } from 'react'

import Header from './Components/Header';
import Category from './Components/Category';
import SlideProduct from './Components/SlideProduct';
import Footer from './Components/Footer';


function App() {

  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = import.meta.env.VITE_API_URL;
  const getproduct = async () => {
    setLoading(true);
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();
    setproduct(data);

  };

  useEffect(
    () => {
      getproduct();
    },
    []
  )

  const Wafer_Chocolate = product.filter((item) => item.sub_category === "Wafer Chocolate");
  const Milk_Chocolate_Bar = product.filter((item) => item.sub_category === "Milk Chocolate Bar");
  const Dark_Chocolate_Bar = product.filter((item) => item.sub_category === "Dark Chocolate Bar");
  const Chocolate_Gift_Pack = product.filter((item) => item.sub_category === "Chocolate Gift Pack");
  const Shaped_Chocolates = product.filter((item) => item.sub_category === "Shaped Chocolates");
  const Filled_Bar_Chocolate_Pack = product.filter((item) => item.sub_category === "Filled Bar Chocolate Pack");

  return (
    <div className='mx-auto'>
      <Header />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Top image*/}
      <a href=""> <img className='w-7xl mx-auto pt-22' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg" alt="" /></a>
      {/* Emergency Section*/}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-7xl mx-auto gap-5 mt-4 pl-4 md:pr-55 '>
        <a href=""><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" /></a>
        <a href=""><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png" alt="" /></a>
        <a href=""> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png" alt="" /></a>

      </div>
      <Category />
      <SlideProduct products={product} title="All Products" />
      <SlideProduct products={Wafer_Chocolate} title="Wafer Chocolate" />
      <SlideProduct products={Milk_Chocolate_Bar} title="Milk Chocolate Bar" />
      <SlideProduct products={Dark_Chocolate_Bar} title="Dark Chocolate Bar" />
      <SlideProduct products={Chocolate_Gift_Pack} title="Chocolate Gift Pack" />
      <SlideProduct products={Shaped_Chocolates} title="Shaped Chocolates" />
      <SlideProduct products={Filled_Bar_Chocolate_Pack} title="Filled Bar Chocolate Pack" />

      <Footer />
    </div>
  )
}

export default App;

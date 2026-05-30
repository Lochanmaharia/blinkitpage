import React from 'react'

function Footer() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 font-okra'>
      <footer className='w-auto mt-5 mb-10 m-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {/* Useful Links */}
          <div className='col-span-1 '>
            <div className="font-semibold text-black text-[18px] my-6">
              Useful Links
            </div>
            <ul className='text-gray-500 list-none text-[14px] p-0 grid grid-cols-3 gap-y-3 gap-x-6'>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </li>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Partner</a></li>
                  <li><a href="#">Franchise</a></li>
                  <li><a href="#">Seller</a></li>
                  <li><a href="#">Warehouse</a></li>
                  <li><a href="#">Deliver</a></li>
                  <li><a href="#">Resources</a></li>
                </ul>
              </li>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Recipes</a></li>
                  <li><a href="#">Bistro</a></li>
                  <li><a href="#">District</a></li>
                  <li><a href="#">Blinkit Ambulance</a></li>

                </ul>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div className='col-span-2'>
            <div className='flex flex-row'>
              <div className='font-semibold text-black text-[18px] my-6'>
                Categories
              </div>
              <a href="#" className='flex items-center justify-center pl-4 text-[rgb(12,131,31)] text-[18px]'>see all</a>
            </div>
            <ul className='text-gray-600 list-none p-0 grid grid-cols-3 gap-y-3 gap-x-6 text-[14px] '>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Vegetables & Fruits</a></li>
                  <li><a href="#">Cold Drinks & Juices</a></li>
                  <li><a href="#">Bakery & Biscuits</a></li>
                  <li><a href="#">Dry Fruits, Masala & Oil</a></li>
                  <li><a href="#">Paan Corner</a></li>
                  <li><a href="#">Pharma & Wellness</a></li>
                  <li><a href="#">Personal Care</a></li>
                  <li><a href="#">Magazines</a></li>
                  <li><a href="#">Electronics & Electricals</a></li>
                  <li><a href="#">Toys & Games</a></li>
                  <li><a href="#">Rakhi Gifts</a></li>

                </ul>
              </li>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Dairy & Breakfast</a></li>
                  <li><a href="#">Instant & Frozen Food </a></li>
                  <li><a href="#">Sweet Tooth </a></li>
                  <li><a href="#">Sauces & Spreads </a></li>
                  <li><a href="#">Organic & Premium </a></li>
                  <li><a href="#">Cleaning Essentials </a></li>
                  <li><a href="#">Pet Care </a></li>
                  <li><a href="#">Kitchen & Dining</a></li>
                  <li><a href="#">Stationery Needs</a></li>
                  <li><a href="#">Print Store</a></li>


                </ul>
              </li>
              <li className='inline-block text-md'>
                <ul className='list-none p-0 grid grid-cols-1 gap-y-1.5 gap-x-6cursor-pointer no-underline leading-5 tracking-tight '>
                  <li><a href="#">Munchies </a></li>
                  <li><a href="#">Tea, Coffee & Milk Drinks</a></li>
                  <li><a href="#">Atta, Rice & Dal</a></li>
                  <li><a href="#">Chicken, Meat & Fish  </a></li>
                  <li><a href="#">Baby Care  </a></li>
                  <li><a href="#">Home Furnishing & Decor  </a></li>
                  <li><a href="#">Beauty & Cosmetics</a></li>
                  <li><a href="#">Fashion & Accessories </a></li>
                  <li><a href="#">Books </a></li>
                  <li><a href="#">E-Gift Cards </a></li>


                </ul>
              </li>

            </ul>
          </div>
        </div>
      </footer>
      <div className='flex justify-center items-center w-auto bg-[rgb(252,252,252)] max-w-full'>
        <div className='py-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/*registration  */}
          <div className='flex justify-start items-center flex-wrap w-full text-[12px] h-12 text-gray-500 '>© Blink Commerce Private Limited, 2016-2026</div>
          {/* Download from here */}
          <div className='flex items-center flex-wrap w-full h-full'>
            <div className='font-semibold text-sm m-4 font-inter'><a href="#">Download App</a> </div>
            <div className='flex justify-between items-center gap-4'>
              <div className='h-7.5 w-23 cursor-pointer rounded-0 '>
                <a href="#"><img src="https://blinkit.com/d61019073b700ca49d22.png" className='rounded-none object-fill cursor-pointer' alt="App Store" /></a>
              </div>
              <div className='h-7.5 w-23 cursor-pointer rounded-0 '>
                <a href="#"><img src="https://blinkit.com/8ed033800ea38f24c4f0.png" className='rounded-none object-fill cursor-pointer' alt="App Store" /></a>
              </div>
            </div>
          </div>
          {/* social media */}
          <div className='flex  items-center flex-wrap w-full h-full ml-4'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center flex-wrap w-full h-full'>

                <div className='mx-3 flex justify-center items-center cursor-pointer'>
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                </div>
                <div className='mx-3 flex justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><circle cx="25" cy="25" r="25" fill="black"></circle><path d="M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" fill="white"></path></svg>
                </div>
                <div className='mx-3 flex justify-center items-center cursor-pointer'>
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_6973_248115)"><rect width="100" height="100" rx="50" fill="white"></rect><path d="M49.5935 59.3496C54.5326 59.3496 58.5366 55.3456 58.5366 50.4065C58.5366 45.4674 54.5326 41.4634 49.5935 41.4634C44.6544 41.4634 40.6504 45.4674 40.6504 50.4065C40.6504 55.3456 44.6544 59.3496 49.5935 59.3496Z" fill="#1F1F1F"></path><path d="M60.7724 28.4553H38.4146C35.1626 28.4553 32.3171 29.4716 30.4878 31.3008C28.6585 33.1301 27.6423 35.9756 27.6423 39.2276V61.5854C27.6423 64.8374 28.6585 67.6829 30.6911 69.7155C32.7236 71.5447 35.3659 72.561 38.6179 72.561H60.7724C64.0244 72.561 66.8699 71.5447 68.6992 69.7155C70.7317 67.8862 71.748 65.0407 71.748 61.7886V39.4309C71.748 36.1789 70.7317 33.5366 68.9024 31.5041C66.8699 29.4716 64.2276 28.4553 60.7724 28.4553ZM49.5935 64.2276C41.8699 64.2276 35.7724 57.9268 35.7724 50.4065C35.7724 42.6829 42.0732 36.5854 49.5935 36.5854C57.1138 36.5854 63.6179 42.6829 63.6179 50.4065C63.6179 58.1301 57.3171 64.2276 49.5935 64.2276ZM64.0244 39.2276C62.1951 39.2276 60.7724 37.8049 60.7724 35.9756C60.7724 34.1463 62.1951 32.7236 64.0244 32.7236C65.8537 32.7236 67.2764 34.1463 67.2764 35.9756C67.2764 37.8049 65.8537 39.2276 64.0244 39.2276Z" fill="#1F1F1F"></path><path d="M50 0C22.3577 0 0 22.3577 0 50C0 77.6423 22.3577 100 50 100C77.6423 100 100 77.6423 100 50C100.203 22.3577 77.6423 0 50 0ZM76.626 61.7886C76.626 66.4634 75 70.5285 72.1545 73.374C69.3089 76.2195 65.2439 77.6423 60.7724 77.6423H38.6179C34.1463 77.6423 30.0813 76.2195 27.2358 73.374C24.187 70.5285 22.7642 66.4634 22.7642 61.7886V39.4309C22.7642 30.0813 29.065 23.5772 38.6179 23.5772H60.9756C65.6504 23.5772 69.5122 25.2033 72.3577 28.0488C75.2032 30.8943 76.626 34.7561 76.626 39.4309V61.7886V61.7886Z" fill="#1F1F1F"></path></g><defs><clipPath id="clip0_6973_248115"><rect width="100" height="100" rx="50" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div className='mx-3 flex justify-center items-center cursor-pointer'>
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="#1F1F1F"></rect><path d="M38.5 37.5H28V72H38.5V37.5Z" fill="white"></path><path d="M64.0045 37.5C58 37.5 56.335 39.468 55 42V37.5H44.5V72H55V52.5C55 49.5 55 46.5 60.25 46.5C65.5 46.5 65.5 49.5 65.5 52.5V72H76V52.5C76 43.5 74.5 37.5 64.0045 37.5Z" fill="white"></path><path d="M33.25 34.5C36.1495 34.5 38.5 32.1495 38.5 29.25C38.5 26.3505 36.1495 24 33.25 24C30.3505 24 28 26.3505 28 29.25C28 32.1495 30.3505 34.5 33.25 34.5Z" fill="white"></path></svg>
                </div>
                <div className='mx-3 flex justify-center items-center cursor-pointer'>
                  <img src="https://blinkit.com/f01e50d66f4eddb1a1da.svg" className='h-10 w-10  rounded-full ' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm text-[rgb(102,102,102)] leading-4.5 mt-3 ff-okra'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</div>
    </div>
  )
}

export default Footer;
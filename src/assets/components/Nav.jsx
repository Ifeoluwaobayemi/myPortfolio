import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

// import {
//   HiHome,
//   HiUser,
//   HiViewGrid,
//   HiRectangleGroup,
//   HiChatBubbleBottomCenterText,
//   HiEnvelope,
// } from 'react-icons/hi'; // Import React Icons

import {
    HiHome,
    HiUser,
    HiViewGrid,
    // HiRectangleGroup,
    // HiChatBubbleBottomCenterText,
    // HiEnvelope,
  } from 'react-icons/hi'; // Import React Icons
  
  import { FaToolbox, FaSpeakap, FaEnvelope } from 'react-icons/fa';

// Define navigation data
const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <FaToolbox /> },
  { name: 'work', path: '/work', icon: <HiViewGrid /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <FaEnvelope/>,
  },
];

const Nav = () => {
  const location = useLocation(); // Use useLocation from react-router-dom to get the current location

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* Inner router */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full text-white'>

        {navData.map((link, index) => (
          <Link
            className={`${link.path === location.pathname && ' text-pink-600'} relative flex items-center group hover:text-pink-800 transition-all duration-300`}
            to={link.path} // Use "to" instead of "href" for react-router Link
            key={index}
          >
            {/* Tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize '>
                  {link.name}
                </div>
                {/* Triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>
            {link.icon}
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Nav;

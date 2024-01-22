//links
import {Link} from "react-router-dom"

//icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine} from 'react-icons/ri'


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg text-white'>
      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiYoutubeLine />
      </Link>

      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiInstagramLine />
      </Link>

      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiFacebookLine />
      </Link>

      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiDribbbleLine />
      </Link>

      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiBehanceLine />
      </Link>

      <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiPinterestLine />
      </Link>

  
    </div>
  )
};

export default Socials;
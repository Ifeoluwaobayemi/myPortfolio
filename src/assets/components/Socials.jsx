//links
import {Link} from "react-router-dom"

//icons
import { RiInstagramLine, RiTwitterLine} from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa';


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg text-white'>
      {/* <Link
      to={''}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiYoutubeLine />
      </Link> */}

      <Link
      to={'https://www.instagram.com/ifeoluwa.betty/'}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiInstagramLine />
      </Link>

      <Link
      to={'https://www.linkedin.com/in/ifeoluwa-obayemi/'}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <FaLinkedin />
      </Link>

      <Link
      to={'https://twitter.com/ifeoluwa_kings'}
      className='hover:text-pink-600 transition-all duration-300'
      >
        <RiTwitterLine />
      </Link>

      {/* <Link
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
      </Link> */}

  
    </div>
  )
};

export default Socials;
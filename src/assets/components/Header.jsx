//nex image


//next link
import {Link} from 'react-router-dom';

//components
import Socials from '../components/Socials';

const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        {/* {logo} */}
        <Link to={'/'}>
          <img
          src={'/Logo.png'}
          width={120}
          height={38}
          priority={true}
          alt=''
          /> 
        </Link>

        
          <Socials />
        
      </div>
    </div>
  </header>
  )
};

export default Header;
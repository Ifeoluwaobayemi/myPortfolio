//next image
// import Image from 'next/image';



const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <img
      src={'/avatar.png'}
      alt=''
      width='100%'
      height='100%'
      className='translate-z-0 w-full h-full'
      />
     

    </div>
  )
};

export default Avatar;
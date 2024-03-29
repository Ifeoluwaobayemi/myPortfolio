import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from "swiper/modules";

import { BsArrowRight } from 'react-icons/bs'

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


const WorkSlider = () => {
  return(
    <Swiper 
    spaceBetween={10}
   pagination={{
    clickable: true
   }}
    modules={[FreeMode, Pagination]}
    className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((item, index) => {
        return <SwiperSlide key={index}>
           <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {item.images.map((image) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                     <div className='flex items-center justify-center relative overflow-hidden'>

                      {/* next image  */}
                      <img
                      src={image.path}
                       alt='' 
                       width={500}
                        height={300} />

                        {/* overlay gradient  */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e858cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700'></div>

                        {/* title  */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em] text-white'>
                            {/* title part 1  */}
                            <div className='delay-100'>Life</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                            {/* icon  */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight/>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              })}
           </div>
            
          </SwiperSlide>
        
        
      })}  
    </Swiper>
  )
};

export default WorkSlider;
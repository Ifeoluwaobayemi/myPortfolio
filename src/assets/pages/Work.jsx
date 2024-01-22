import Circles from "../components/Circles";
import WorkSlider from "../components/Workslider";
import Bulb from "../components/Bulb";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

import Layout from "../components/Layout";

const Work = () => {
  return(
    <Layout>
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles/>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
            variants= {fadeIn('up', 0.3 )}
            initial='hidden'
            animate='show'
            exit='hidden'
             className="h2 xl:mt-12 text-white">
              My work <span className="text-pink-600">.</span>
            </motion.h2>
            <motion.p
            variants= {fadeIn('up', 0.4 )}
            initial='hidden'
            animate='show'
            exit='hidden'
             className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-pink-300">
            Designing and implementing user interface (UI) and user experience (UX) of a software application. 
            {/* My primary focus is on the client-side of the application, which is what users interact with directly. Here are some of the key services provided by a frontend software engineer */}
            </motion.p>
          </div>
          <motion.div
          variants= {fadeIn('down', 0.4 )}
          initial='hidden'
          animate='show'
          exit='hidden'
           className="w-full xl:max-w-[65%] px-4 ">
            {/* slider */}
            <WorkSlider/>
          </motion.div>
            
        </div>
      </div>
      <Bulb />
    </div>
    </Layout>

  )
  ;
};

export default Work;


//component
import ParticlesContainer from '../components/Tsparticles';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//bulb
import Bulb from '../components/Bulb'

//farmer motion
import { motion } from "framer-motion";

//variants
import {fadeIn} from '../../variants';

const Home = () => {
  return (
    <Layout>
    <div className="bg-primary/60 h-full">

      {/* {text} */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <Bulb/>
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* {title} */}
          <motion.h1
          variants={fadeIn('down', 0.4 )}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1 capitalize text-white">
            transforming Ideas <br/> Into {''}
            <span className="text-pink-600">Digital reality</span>
          </motion.h1>
          {/* {subtitle} */}
          <motion.p
          variants={fadeIn('down', 0.6 )}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-pink-300">
          involves conceptualizing, designing, developing, and refining digital solutions. It's a process that requires creativity, technical expertise, testing, and continuous adaptation to meet user needs and market demands.
          </motion.p>

          {/* {btn} */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4 )}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="hidden xl:flex"
          >
            <ProjectsBtn/>
          </motion.div>

        </div> 
      </div>  
      {/* {image} */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* {bg img} */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full fixed mix-blend-color-dodge translate-z-0"></div>
        {/* {particles} */}
        <ParticlesContainer />
        {/* {avata img} */}
        <motion.div
         variants={fadeIn('up', 0.5 )}
         initial='hidden'
         animate='show'
         exit='hidden'
         transition={{duration: 1, ease:'easeInOut'}}
         className="w-full h-full max-w-[1107px] max-h-full absolute -bottom-32 lg:bottom-96 lg:-right-[10%]">
          <Avatar/>
        </motion.div>
      </div>
       
    </div>
    </Layout>
  );
};

export default Home;
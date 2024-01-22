import Circles from "../components/Circles";
// import WorkSlider from "../components/Workslider";
import Bulb from "../components/Bulb";

//farmer
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../../variants'
//icons
import { BsArrowRight } from "react-icons/bs";

//layout
import Layout from "../components/Layout";


const Contact = () => {
  return(
    <Layout>
    <div className="h-full">
      <Circles/>
      <Bulb/>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full ">
        {/* text & form  */}
        <div className="flex flex-col w-full max-w-[700px] px-2">
          {/* text  */}
          <motion.h2
           variants= {fadeIn('up', 0.2 )}
           initial='hidden'
           animate='show'
           exit='hidden'
          className=" h2 text-center mb-12 text-white">
            Let's <span className="text-pink-600">connect.</span>
          </motion.h2>

          {/* form  */}
          <motion.form
           variants= {fadeIn('down', 0.2 )}
           initial='hidden'
           animate='show'
           exit='hidden'
           className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* input group  */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input"/>
              <input type="email" placeholder="email" className="input"/>
            </div>
            <input type="text" placeholder="subject" className="input"/>
            <textarea className="textarea" placeholder="message"></textarea>

            {/* button  */}
            <button 
            className=" btn rounded-full border border-pink-600 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pink-600 group"
            >
              <span className="text-pink-600 group-hover:-translate-y-[120%] group-hover:hidden transition-all duration-500">
                Let's talk
              </span>
              <span className="-translate-y-[120%] text-white opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 group-hover:text-pink-600 transition-all">
                send
              </span>
              <BsArrowRight className="-translate-y-[120%] text-white opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 group-hover:text-pink-600 transition-all"/>
            </button>
          </motion.form>
        </div>
       
      </div>

    </div>
    </Layout>

  )};

export default Contact;
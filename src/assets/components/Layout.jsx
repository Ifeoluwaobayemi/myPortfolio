

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg';
import Transition from '../components/Transition'
import { AnimatePresence, motion } from 'framer-motion';

const Layout = ({ children }) => {
  return(
    <AnimatePresence mode='wait'>
    <div className=" bg-green w-full h-full position absolute overflow-hidden leading-relaxed top-0 left-0">
      <Transition/>
      <TopLeftImg/>
      <Nav/> 
      <Header/>
      {children}
    </div>
    </AnimatePresence>
  )
};

export default Layout;
import React,{useCallback} from 'react'
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

const Tsparticles = () => {
  //init
  const particlesinit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return( 
  <Particles
  className="w-full h-full absolute translate-z-0"
   id="tsparticles"
   init={particlesinit}
   loaded={particlesLoaded}
    options={{
      fullScreen: {enable:false},
      background:{
        color:{
          value:'',
        },
      },
      fpsLimit:120,
      interactivity:{
        events:{
          onClick:{
            enable:false,
            mode:'push',
          },
          onHover:{
            enable: true,
            mode: 'repulse'
          },
          resize:true,
        },
        modes:{
          push:{
            quality: 90
          },
          repulse:{
            distance:200,
            duration:0.4,
          },
        }
      },
      particles:{
        color:{
          value: '#e68e2e',
        },
        links:{
          color: '#f5d393',
          distance: 150,
          enable: true,
          opactiy: 0.5,
          width:1
        },
        collisions:{
          enable:true,
        },
        move:{
          directions: 'none',
          enable: true,
          outMode:{
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false
        },
        number:{
          density:{
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opactiy:{
          value: 0.5,
        },
        shape:{
          type: 'circle',
        },
        size:{
          value: {min: 1, max: 5},
        },
      },
      detectRetina: true,
    }}
   />
)};


export default Tsparticles
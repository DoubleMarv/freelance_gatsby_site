import * as React from 'react'
import { Link } from 'gatsby'
import {holdsoneyou_nav} from '../asset_includes/homepagebanner.scss';
import { motion } from "framer-motion"


function addborderbottom() {
    document.querySelector("#homepagebanner").classList.add('borderbottom');
}

const Homepagebanner = () => {
  return (
    <>

<motion.section id="homepagebanner" className="homepagebanner"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: .2 }}
onAnimationComplete={addborderbottom}>
      <div className="containo">
      <div className="textholdo">

      <motion.figure id="balloonhead" className="headshot"
      initial={{ y: 200, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
              <motion.div className="innerline"
      initial={{ height: 0 }}
  animate={{ height: 900 }}
  transition={{ type: "spring", stiffness: 40, delay: .7 }}

      ></motion.div>
      </motion.figure>
      <motion.p
      initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 50, delay: 0.3 }}>Barry English</motion.p>
      	<motion.h1 initial={{ x: -30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 60, delay: 0.4 }}>Freelance developer/designer</motion.h1>
        	<motion.h2 initial={{ y: 80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 60, delay: 0.4 }}>Website design & development, maintenance & optimisation | Based in Cork, Ireland</motion.h2>
      </div>
      </div>
      </motion.section>
    </>
  )
}
export default Homepagebanner


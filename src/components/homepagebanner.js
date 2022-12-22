import * as React from 'react'
import { Link } from 'gatsby'
import {holdsoneyou_nav} from '../asset_includes/homepagebanner.scss';
import { motion } from "framer-motion"


function addBalloonClass() {
  document.querySelector("#balloonhead").classList.add('longtail');
}

const Homepagebanner = () => {
  return (
    <>
      <section className="homepagebanner">
      <div className="containo">
      <div className="textholdo">

      <motion.figure id="balloonhead" className="headshot"
      initial={{ y: 200, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
  onAnimationComplete={addBalloonClass}
      ></motion.figure>
      <motion.p
      initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 50, delay: 0.4 }}>Barry English</motion.p>
      	<motion.h1 initial={{ x: -30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 60, delay: 0.5 }}>Cork-based Freelance developer/designer</motion.h1>
      </div>
      </div>
      </section>
    </>
  )
}
export default Homepagebanner


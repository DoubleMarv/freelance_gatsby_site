import * as React from 'react'
import { Link } from 'gatsby'
import {griditem} from '../asset_includes/griditem.scss';
import {useRef} from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



const Griditem = (props) => {
  const backimage = props.backgroundImage;
  const itemindex = props.indexo;
      const ref = useRef(null);
  const isInView = useInView(ref);
  const whynum = (itemindex*100);
  const delayo = (itemindex*0.5);
  const disto = (100+(itemindex*17));
  let topdistance = (isInView ? 0 : disto );
  return (
    <>
<motion.div ref={ref}
style={{backgroundImage:'url('+ backimage +')'}}
initial="hidden"  
animate={{ y: topdistance }}
transition={{ ease: "easeOut", duration: 0.35 }}
className="griditem"
></motion.div>
    </>
  )
}
export default Griditem
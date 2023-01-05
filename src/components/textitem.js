import * as React from 'react'
import { Link } from 'gatsby'
import {griditem} from '../asset_includes/textitem.scss';
import {useRef} from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



const Textitem = (props) => {
  const thetext = props.titletext;
  const thecont = props.contento;
  return (
    <>
<div className="centvert-textholder">
<h2>{thetext}</h2>
<p>{thecont}</p>
</div>
    </>
  )
}
export default Textitem
import * as React from 'react'
import { Link } from 'gatsby'
import {griditem} from '../asset_includes/griditem.scss';
import {useRef} from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



const Textitem = (props) => {
  const thetext = props.titletext;
  return (
    <>
<h2>{thetext}</h2>
    </>
  )
}
export default Textitem
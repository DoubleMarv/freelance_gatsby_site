import * as React from 'react';
import { motion } from "framer-motion";
import { Link } from 'gatsby';
import {portfolio_grid} from '../asset_includes/portfoliogrid.scss';
import Griditem from "./griditem.js"
import Textitem from "./textitem.js"



const Portfoliogrid = (props) => {
  const showitemsnumber = props.showitems;
  const sidetitle = props.sidetitle;
  const imagios = props.images;
const titler = props.title;
const contenttext = props.content;
let text;
if(titler || contenttext){
  text = <Textitem titletext={titler} contento={contenttext}/>
}

let sideo;
if(sidetitle){
  sideo = <div className='sideo'><span>{sidetitle}</span></div>
}
  return (
    <>
      <section className="portfoliogrid">
        {sideo}
      <div className="containo">
      <div className={'portfolio_holder portfoliogrid--' + showitemsnumber}>
          {imagios.map((image, index) => {
            return <Griditem key={image} backgroundImage={image} indexo={index}>{index}</Griditem>;
          })}

{text}
      </div>
      </div>
      </section>
    </>
  )
}
export default Portfoliogrid


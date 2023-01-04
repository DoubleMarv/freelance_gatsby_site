import * as React from 'react';
import { motion } from "framer-motion";
import { Link } from 'gatsby';
import {portfolio_grid} from '../asset_includes/portfoliogrid.scss';
import Griditem from "./griditem.js"
import Textitem from "./textitem.js"


const Portfoliogrid = (props) => {
  const showitemsnumber = props.showitems;
  const imagios = props.images;
const titler = props.title;
  return (
    <>
      <section className="portfoliogrid">
      <div className="containo">
      <div className={'portfolio_holder portfoliogrid--' + showitemsnumber}>

          {imagios.map((image, index) => {
            return <Griditem key={image} backgroundImage={image} indexo={index}>{index}</Griditem>;
          })}

      <Textitem titletext={titler} />
      </div>
      </div>
      </section>
    </>
  )
}
export default Portfoliogrid


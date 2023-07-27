import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Ping us <a href="mailto:bd.global.technology@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText"></span>
            <h3> New York Location</h3> 
            <p>102ND Street, Ozone park,NY 11416 , USA</p>
            <p>Phone: + 929 393 8698 (USA) </p> 
        
            <br />

            <h3 >Dhaka location</h3>
            <p>Uttara, Dhaka, Bangladesh</p>

            <p>Phone: +880 1630458205 </p>
            <p>Phone: +880 1401455764  </p> 

          </div>
          
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

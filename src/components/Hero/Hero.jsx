import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hello,
            <br />
            Welcome to <br />
            BD Global Technology
          </motion.span>

          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="/hero.png" alt="" />

          
          
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
        
        </motion.div>

        

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            
            <div className="primaryText">7</div>
            <div className="secondaryText">
              <div className={css.Blue} >Years</div>
              <div>Experience</div>
              
            </div> 
           
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <h3 className={css.green} >#Top Digital Agency In NewYork City</h3>
            <span> Web Development</span>
            <span>Graphic Design</span>
            <span>UI / UX Design</span>
            <span>Digital Marketing</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from "react";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <motion.section
      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="cta"
    >
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build somthing together!!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </motion.section>
  );
};
// add
export default CTA;

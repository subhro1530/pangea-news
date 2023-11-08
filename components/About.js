// components/About.js
import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import styles from "../styles/About.module.css";

const About = () => {
    return (
      <>
        <div id={styles.wrap}>
          <div className={styles.box}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
          <div className={styles.text}>
            <h5>
              <span>CREATIVE</span>
              <span>DEVELOPER</span>
            </h5>
            <a href="https://codepen.io/cobra_winfrey/" target="_blank">
              <i className="fab fa-codepen"></i>
            </a>
            <a href="https://twitter.com/cobra_winfrey" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </>
    );
};

export default About;

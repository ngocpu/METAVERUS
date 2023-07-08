'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer,fadeIn,planetVariants } from '../utils/motion';
import { ExploreCard, StartSteps, TitleText, TypingText } from '../components';
import {startingFeatures} from '../constants/index'
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto relative lg:flex-row flex-col flex gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/get-started.png" alt="planet" className='w-[90%] h-[90%] object-contain' />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2,1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| How Metaversus work' />
        <TitleText title={<>Get started with just a few click</>} />
        <div className="mt-[30px] flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((item, index) =>(
              <StartSteps 
                key={index}
                number={index +1}
                text={item}
              />
            ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;

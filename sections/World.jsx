'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
     <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween',0.3,1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src="/map.png" alt="map" className='w-full h-full object-cover' />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] z-1000">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[40%] left-[15%] w-[196px] h-[150px] p-[6px] rounded-[24px] gradient-03 " />
        <div className="absolute top-[42%] left-[15%] w-[190px] h-[145px] p-[6px] rounded-[24px] bg-[#5d426d]">
          <img 
            src="https://s3-alpha-sig.figma.com/img/7dbe/8057/2b5d3bbdae0bc99d0a639394ca8703a8?Expires=1689552000&Signature=ogVRItHxXuW5VIEQzL1b1GGmWQotcioAvuQe0hfxYUCr6ip3LnsvmggA0sxkmEblNfV6HgotbEmD9mUmIp5KV-DTXzI5MEaQcd4FqYi9Bs1FsvYLcEInkSx8k~lK8sk1KoPgoSJMyZKHJXWS02ilWSO7SxZD6bh6oSXJHNz9POacmRn19Ofg61S6ghfnMvxJ8u8wchPT3r7d850UdzuV2n0Tew6qR7k5vSnjk3UIZzF2fBL73jkLAp7ZjeBPoPY3NqjcVsTUNKwsaeS~srs732jQRLzz4zyzuOXo7--tSGquD1TXwpsGk8taoJNTk2~6hbhLL6ng5SDDVuporMfh9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
            alt="plan"
            className='w-full h-full rounded-[24px]' 
          />
        </div>
        <div className="absolute top-[12%] right-[22%] w-[196px] h-[150px] p-[6px] rounded-[24px]  " />
        <div className="absolute top-[12%] right-[24%] w-[190px] h-[145px] p-[6px] rounded-[24px] bg-[#3a4474]">
          <img 
            src="planet-06.png" 
            alt="plan"
            className='w-full h-full rounded-[24px]' 
          />
        </div>
            
          {/* <img src="blob:https://www.figma.com/96fae9ec-a25c-4ff9-b40e-73d892f8a375" alt="blur"  /> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;

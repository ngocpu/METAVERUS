"use client";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "string", index * 0.5, 1)}
    className={`${styles.flexCenter} flex justify-center items-center md:flex-row flex-col`}
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full md:w-[250px] h-[270px] rounded-[32px] object-cover "
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white leading-[52px] ">
          {title}
        </h4>
        <p className="font-normal text-[20px] text-white leading-[40px] opacity-40 ">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;

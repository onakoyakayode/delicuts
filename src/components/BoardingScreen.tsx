import React from "react";
import { motion } from "framer-motion";

import delicutLogo from "../assets/images/delicuts.png";
import Image from "next/image";

const BoardingScreen = () => {
  return (
    <div className="h-[100dvh] w-full flex justify-center items-center">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <Image
          src={delicutLogo}
          alt="delicut"
          className="w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default BoardingScreen;

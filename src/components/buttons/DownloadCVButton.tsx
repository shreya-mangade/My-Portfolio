"use client";

import React from "react";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

interface DownloadCVButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open(
    "https://drive.google.com/file/d/11ccgNR-xEUbv_CwfO61oRsu4s565G55P/view?pli=1",
    "_blank",
    "noreferrer"
  );
};

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  showText = false,
}) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <LuDownload size={20} />
      {showText && <span>Download CV</span>}
    </motion.button>
  );
};

export default DownloadCVButton;

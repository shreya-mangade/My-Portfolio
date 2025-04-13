"use client";

import React from "react";
import { FaCloud } from "react-icons/fa6";
import { motion } from "framer-motion";

interface TrailheadButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open(
    "https://www.salesforce.com/trailblazer/smangade1",
    "_blank",
    "noreferrer"
  );
};

const TrailheadButton: React.FC<TrailheadButtonProps> = ({ showText = false }) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <FaCloud size={20} color="skyblue" />
      {showText && <span>Trailhead</span>}
    </motion.button>
  );
};

export default TrailheadButton;

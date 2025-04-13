"use client";

import React from "react";
import { TbSquareLetterM } from "react-icons/tb";
import { motion } from "framer-motion";

interface MediumButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open("https://medium.com/@shreya.mangade", "_blank", "noreferrer");
};

const MediumButton: React.FC<MediumButtonProps> = ({ showText = false }) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <TbSquareLetterM size={20} />
      {showText && <span>Medium</span>}
    </motion.button>
  );
};

export default MediumButton;

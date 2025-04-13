"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface GithubButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open("https://www.github.com/shreya-mangade", "_blank", "noreferrer");
};

const GithubButton: React.FC<GithubButtonProps> = ({ showText = false }) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <FaGithub size={20} />
      {showText && <span>Github</span>}
    </motion.button>
  );
};

export default GithubButton;

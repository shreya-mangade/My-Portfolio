"use client";

import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { motion } from "framer-motion";

interface LinkedInButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open(
    "https://www.linkedin.com/in/shreyamangade/",
    "_blank",
    "noreferrer"
  );
};

const LinkedInButton: React.FC<LinkedInButtonProps> = ({ showText = false }) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <GrLinkedin size={20} />
      {showText && <span>Linkedin</span>}
    </motion.button>
  );
};

export default LinkedInButton;

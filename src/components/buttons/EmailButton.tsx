"use client";

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

interface EmailButtonProps {
  showText?: boolean;
}

const handleClick = () => {
  window.open("mailto:shreya.mangade@gmail.com", "_blank", "noreferrer");
};

const EmailButton: React.FC<EmailButtonProps> = ({ showText = false }) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
      whileHover={{ scale: 0.9 }}
    >
      <MdOutlineEmail size={20} />
      {showText && <span>Email</span>}
    </motion.button>
  );
};

export default EmailButton;

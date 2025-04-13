"use client";


import React, { useState } from "react";
import { motion as motion, AnimatePresence } from "framer-motion";
import { FaCloud, FaCode } from "react-icons/fa";
import SalesforceSkills from "./salesforce/SalesforceSkills";
import FullStackSkills from "./full-stack/FullStackSkills";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"salesforce" | "fullstack">("salesforce");

  return (
    <>
      <div className="w-full p-5">
        {/* Tab Buttons */}
        <div className="skills-nav-bar">
          <button
            className={`skills-button ${activeTab === "fullstack" ? "active" : ""}`}
            onClick={() => setActiveTab("fullstack")}
          >
            <p className="pr-2">Full Stack Development</p>
            <FaCode size={25} />
          </button>

          <button
            className={`skills-button ${activeTab === "salesforce" ? "active" : ""}`}
            onClick={() => setActiveTab("salesforce")}
          >
            <p className="pr-2">Salesforce</p>
            <FaCloud size={25} />
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "fullstack" && (
              <motion.div
                key="fullstack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <FullStackSkills />
              </motion.div>
            )}

            {activeTab === "salesforce" && (
              <motion.div
                key="salesforce"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <SalesforceSkills />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Skills;

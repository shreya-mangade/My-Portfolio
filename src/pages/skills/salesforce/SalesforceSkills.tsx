"use client";
import React from "react";
import { motion } from "framer-motion";

const clouds: [string, string][] = [
  ["Sales Cloud", "/skills/SalesCloud.png"],
  ["Service Cloud", "/skills/Service.png"],
  ["Data Cloud", "/skills/DataCloud.png"],
  ["Experience Cloud", "/skills/Experience.png"],
  ["Marketing Cloud", "/skills/Marketing.jpg"],
];

const languages: [string, string][] = [
  ["HTML", "/skills/HTML5.png"],
  ["CSS", "/skills/CSS3.png"],
  ["JavaScript", "/skills/JavaScript.png"],
  ["Apex", "/skills/Apex.png"],
  ["Aura / LWC", "/skills/LWC.png"],
  ["Visualforce", "/skills/VisualForce.png"],
  ["Omnistudio", "/skills/Omnistudio.png"],
  ["Agentforce", "/skills/AgentForce.png"],
];

const ci_cd: [string, string][] = [
  ["Git", "/skills/Git.png"],
  ["Bitbucket", "/skills/BitBucket.png"],
  ["Copado", "/skills/Copado.png"],
];

const tools: [string, string][] = [
  ["Tableau", "/skills/Tableau.png"],
  ["Postman", "/skills/Postman.png"],
  ["Salesforce Doc", "/skills/SDoc.png"],
  ["AWS", "/skills/AWS.png"],
];

const SalesforceSkills: React.FC = () => {
  const renderSkills = (skills: [string, string][]) => (
    <div className="skills-card">
      <div className="flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(([name, imgPath]) => (
          <div key={name} className="flex flex-col items-center">
            <motion.img
              src={imgPath}
              alt={name}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-medium text-[var(--color-gray-light)]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
      {renderSkills(clouds)}
      {renderSkills(languages)}
      {renderSkills(ci_cd)}
      {renderSkills(tools)}
    </div>
  );
};

export default SalesforceSkills;

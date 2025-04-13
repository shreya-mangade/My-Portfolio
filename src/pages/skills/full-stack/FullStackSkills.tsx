"use client";
import React from "react";
import { motion } from "framer-motion";

// Use public path: /skills/SkillName.png
const backend: [string, string][] = [
  ["Python", "/skills/Python.png"],
  ["Java", "/skills/Java.png"],
  ["C++", "/skills/C++-(CPlusPlus).png"],
  ["JavaScript", "/skills/JavaScript.png"],
  ["Apex", "/skills/Apex.png"],
  ["Dart", "/skills/Dart.png"],
];

const frontend: [string, string][] = [
  ["HTML", "/skills/HTML5.png"],
  ["CSS", "/skills/CSS3.png"],
  ["React", "/skills/React.png"],
  ["Bootstrap", "/skills/Bootstrap.png"],
  ["Tailwind", "/skills/Tailwind-CSS.png"],
  ["Material UI", "/skills/Material-UI.png"],
];

const frameworks: [string, string][] = [
  ["Salesforce", "/skills/Salesforce.png"],
  ["NodeJS", "/skills/Node.js.png"],
  ["ExpressJS", "/skills/Express.png"],
  ["Django", "/skills/Django.png"],
  ["Hadoop", "/skills/Apache-Hadoop.png"],
];

const databases: [string, string][] = [
  ["MongoDB", "/skills/MongoDB.png"],
  ["MySQL", "/skills/MySQL.png"],
  ["PostgreSQL", "/skills/PostgresSQL.png"],
  ["Firebase", "/skills/Firebase.png"],
];

const ci_cd: [string, string][] = [
  ["Git", "/skills/Git.png"],
  ["BitBucket", "/skills/BitBucket.png"],
  ["Docker", "/skills/Docker.png"],
  ["AWS", "/skills/AWS.png"],
];

const others: [string, string][] = [["Postman", "/skills/Postman.png"]];

const FullStackSkills: React.FC = () => {
  const renderSkills = (title: string, skills: [string, string][]) => (
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
      {renderSkills("Backend", backend)}
      {renderSkills("Frontend", frontend)}
      {renderSkills("Frameworks", frameworks)}
      {renderSkills("Databases", databases)}
      {renderSkills("CI/CD", ci_cd)}
      {renderSkills("Others", others)}
    </div>
  );
};

export default FullStackSkills;

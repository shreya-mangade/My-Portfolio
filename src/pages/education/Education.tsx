import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  university: string;
  logo: string;
  link: string;
  location: string;
  degree: string;
  duration: string;
}

const educationList: EducationItem[] = [
  {
    university: "California State University, Long Beach",
    logo: "/org/CSULB.png", // moved from src/assets → public/org
    link: "https://www.csulb.edu/",
    location: "Long Beach, CA, USA",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2023 – May 2025",
  },
  {
    university: "Savitribai Phule Pune University",
    logo: "/org/SPPU.jpeg", // moved from src/assets → public/org
    link: "http://www.unipune.ac.in/",
    location: "Pune, India",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "Aug 2016 – Jun 2020",
  },
];

const Education: React.FC = () => {
  return (
    <>
      <motion.p
        className="headings"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Academic Journey
      </motion.p>

      <div className="p-3 sm:p-5 md:p-6 lg:p-8">
        {educationList.map((edu, idx) => (
          <motion.div
            key={edu.university}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="mb-10"
          >
            {/* Header: University Info & Dates */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex gap-4">
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-13 h-13"
                >
                  <motion.img
                    src={edu.logo}
                    alt={`${edu.university} Logo`}
                    className="w-12 h-12 object-contain"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </a>
                <div>
                  <h2 className="font-bold text-lg">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {edu.university}
                    </a>
                  </h2>
                  <p className="text-sm text-[var(--color-gray-light)]">
                    {edu.degree}
                  </p>
                </div>
              </div>
              <div className="text-right text-sm text-[var(--color-gray-light)] leading-tight">
                <p>{edu.location}</p>
                <p>{edu.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Education;

"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  tech: string[];
  achievements: string[];
  repo: string;
}

const projects: Project[] = [
  {
    name: "Smart Contract AI",
    description:
      "Salesforce contract analysis tool to analyse the contract terms and conditions using AWS.",
    tech: ["Salesforce", "AWS", "EventBridge", "S3", "DynamoDB", "CloudWatch"],
    achievements: [
      "Reduced manual effort by 60% through automated contract analysis, enhancing accuracy and compliance",
      "Accelerated processing 5x with AWS serverless architecture (EventBridge, Lambda, S3) for real-time execution",
    ],
    repo: "https://github.com/shreya-mangade/SmartContract-AI",
  },
  {
    name: "DataTransformer",
    description:
      "Big Data project using Hadoop to implement MapReduce jobs for distributed data processing and analytics.",
    tech: ["Hadoop", "MapReduce", "HDFS", "Java", "SpringBoot", "YARN"],
    achievements: [
      "Built MapReduce jobs for sorting and aggregating large datasets",
      "Configured Hadoop ecosystem locally for simulation",
      "Demonstrated fault-tolerant distributed computing",
    ],
    repo: "https://github.com/shreya-mangade/HadoopNova",
  },
  {
    name: "Smart Meeting Assistant",
    description:
      "AI-powered assistant that transcribes meetings, extracts key points, and summarizes using NLP and PageRank.",
    tech: ["Python", "Google Speech API", "NLP", "PageRank"],
    achievements: [
      "Achieved 90%+ transcription accuracy by integrating Google Speech-to-Text API with speaker diarization.",
      "Automated summarization using TextRank, reducing manual documentation by 75%.",
      "Enabled teams to extract key decisions and action items 3x faster through concise, AI-generated summaries.",
    ],
    repo: "https://github.com/shreya-mangade/Smart-Meeting-Assistant",
  },
  {
    name: "VroomCar",
    description:
      "A carpooling Android app that connects drivers and riders using Firebase, enabling efficient ride-sharing.",
    tech: ["Java", "Firebase", "XML", "Google Maps API"],
    achievements: [
      "Designed and developed ride-booking UI in native Android",
      "Integrated Firebase Auth, Firestore, and Realtime Database",
      "Enabled location-based ride filtering with Google Maps",
    ],
    repo: "https://github.com/shreya-mangade/VroomCar",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.p
        className="headings px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Sandbox
      </motion.p>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="card"
          >
            {/* Header Row */}
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl text-white font-semibold">
                {project.name}
              </h2>
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-[var(--color-gray-light)] hover:text-white"
              >
                <FaGithub size={25} />
              </motion.a>
            </div>

            {/* Description */}
            <p className="text-base text-[var(--color-gray-light)] mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <p className="text-[var(--color-cyan-light)] font-semibold p-1">
              Highlights 🔥 :
            </p>
            <ul className="list-disc list-inside text-base text-[var(--color-gray-light)] space-y-1">
              {project.achievements.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;

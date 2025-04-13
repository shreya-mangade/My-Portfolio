"use client";
import React from "react";
import { motion } from "framer-motion";

interface Role {
  title: string;
  duration: string;
  details: string[];
}

interface ExperienceItem {
  name: string;
  location: string;
  logo: string;
  companyLink: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    name: "California State University, Long Beach",
    location: "Long Beach, CA, USA",
    logo: "/org/CSULB.png",
    companyLink: "https://www.csulb.edu/",
    roles: [
      {
        title: "Student Assistant",
        duration: "Mar 2024 - Present",
        details: [
          "Developed the cultural graduation ticketing web-hosted ReactJS and Node.js system facilitating 1,600+ student support.",
          "Resolved technical bugs and increased ticketing issues by 20%.",
        ],
      },
    ],
  },
  {
    name: "Deloitte",
    location: "India",
    logo: "/org/Deloitte.png",
    companyLink: "https://www.deloitte.com/",
    roles: [
      {
        title: "Analyst",
        duration: "Mar 2022 - Jul 2023",
        details: [
          "Engineered Lightning Web Components (LWC) to replace the legacy single-payment method in Financial Service, enabling multiple-payment methods and reducing rework by 70%",
          "Optimized SOAP APIs and backend services, ensuring 15% less downtime for customers with 150+ financial accounts",
          "Implemented 10+ real-time API callouts with MuleSoft, enhancing data exchange and system integration",
          "Streamlined business logic by using Flow Builder, reducing Apex code coverage from 99% to 90%",
          "Managed bi-weekly sprint delivery & deployed enhancements across sandboxes and production using Copado",
        ],
      },
    ],
  },
  {
    name: "Tata Consultancy Services",
    location: "India",
    companyLink: "https://www.tcs.com/",
    logo: "/org/TCS.jpg",
    roles: [
      {
        title: "Assistant Systems Engineer",
        duration: "Aug 2020 - Feb 2022",
        details: [
          "Created a specialized email notification system through the implementation of database triggers, leading to a 30% boost in user engagement",
          "Designed and implemented approval workflows that improved approval process efficiency by 35% for bulk offers",
          "Enhanced Quote processing components, resulting in 15% increased performance and 7% revenue growth",
          "Leveraged Tableau, Reports and Dashboards for data-driven insights, improving sales performance by 25%",
          "Automated S-Doc document generation using Apex, addressing 25% of business requirements efficiently",
        ],
      },
    ],
  },
  {
    name: "Pionium Consultants Pvt Ltd, Pune",
    location: "India",
    companyLink: "https://www.pioniumtech.com/",
    logo: "/org/PioniumCon.jpg",
    roles: [
      {
        title: "Flutter Developer Intern",
        duration: "May 2020 - Aug 2020",
        details: [
          "Built and tained single code-based mobile applications using the Google Flutter framework, Firebase and Dart.",
          "Worked on Razor Payment integration within the application to cater to the payment module",
          "Integrated custom REST APIs within application to cater to more than 5 callout modules",
          "Enhanced the app state management by 50% by utilising Providers",
        ],
      },
    ],
  },
  {
    name: "Persistent Systems",
    location: "India",
    logo: "/org/Persistent.png",
    companyLink: "https://www.persistent.com/",
    roles: [
      {
        title: "Project Intern - AI/ML",
        duration: "Jun 2019 - Apr 2020",
        details: [
          "Achieved 90%+ transcription accuracy by integrating Google Speech-to-Text API with speaker diarization.",
          "Automated summarization using TextRank, reducing manual documentation by 75%.",
          "Enabled teams to extract key decisions and action items 3x faster through concise, AI-generated summaries.",
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <>
      <motion.p
        className="headings pl-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Impact
      </motion.p>

      <div className="p-5 sm:p-5 md:p-6 lg:p-8">
        {experiences.map((company, ) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-1">
              <div className="flex-shrink-0 flex items-center justify-center w-13 h-13 mr-4">
                <a
                  href={company.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="w-12 h-12 object-contain"
                  />
                </a>
              </div>
              <div>
                <h2 className="font-bold">
                  <a
                    href={company.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.name}
                  </a>
                </h2>
                <p className="text-sm text-[var(--color-gray-light)]">
                  {company.location}
                </p>
              </div>
            </div>

            <div className="border-l-2 border-blue-200 pl-4 pt-4 ml-6">
              {company.roles.map((role, roleIdx) => (
                <div key={roleIdx} className="mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{role.title}</h3>
                    <span className="text-[var(--color-gray-light)]">
                      {role.duration}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 mt-2 text-base text-[var(--color-gray-light)]">
                    {role.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;

"use client";
import React from "react";
import ContactMeForm from "./ContactMeForm";
import ContactInfoPanel from "./ContactInfoPanel";
import { motion } from "framer-motion";

const ContactMe: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-5">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card">
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
              Let’s Ship It — Together 🚀
            </p>
            <hr className="h-px bg-[var(--color-gray-light)] border-0 my-2" />

            <p>☁️ Salesforce Developer</p>
            <ul className="list-disc list-inside space-y-1">
              <li>I build scalable solutions on Salesforce</li>
              <li>
                From Apex to LWC, I write clean, reusable code across clouds.
              </li>
              <li>
                I streamline workflows, automate processes, and boost
                efficiency.
              </li>
            </ul>

            <p className="mt-4">💻 Full-Stack Developer</p>
            <ul className="list-disc list-inside space-y-1">
              <li>I build scalable apps from frontend to backend</li>
              <li>React, Node, MongoDB — I own the stack</li>
              <li>Clean code, fast delivery, solid architecture</li>
            </ul>

            <p className="mt-4">🎨 Frontend Developer</p>
            <ul className="list-disc list-inside space-y-1">
              <li>I craft clean, responsive UIs with React and UI libs</li>
              <li>Fast, accessible, and user-focused</li>
              <li>Design meets performance — every time</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Form Panel (Narrower) */}
        <div className="max-w-md w-full mt-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactMeForm />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <ContactInfoPanel />
      </motion.div>
    </>
  );
};

export default ContactMe;

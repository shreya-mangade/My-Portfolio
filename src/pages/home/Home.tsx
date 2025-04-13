"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GithubButton from "../../components/buttons/GithubButton";
import LinkedInButton from "../../components/buttons/LinkedInButton";
import EmailButton from "../../components/buttons/EmailButton";
import DownloadCVButton from "../../components/buttons/DownloadCVButton";
import MediumButton from "../../components/buttons/MediumButton";
import TrailheadButton from "../../components/buttons/TrailheadButton";
import EditorWindow from "../../components/typewriter-animation/EditorWindow";

const files: Record<string, string> = {
  "info.txt": `\n
    ⚡  Salesforce Development
    💻  Full Stack Development
    ☁️  Cloud-Native Applications
    🔄  Version Control & Automation
    🔌  API Integration & Development
  `,
};

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 py-20">
        {/* Left - Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-6 text-left"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              HI,
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              I AM <span className="text-[var(--color-cyan-dark)]"> SHREYA !</span>
            </h2>
          </div>
          <div className="text-base text-white leading-relaxed">
            <p>
              Currently pursuing my{" "}
              <span className="text-green-400 font-semibold">
                Master’s in Computer Science at CSULB
              </span>
              , I focus on building clean, user-centered digital solutions. My
              strengths lie in{" "}
              <span className="text-green-400 font-semibold">
                Salesforce development
              </span>
              , along with crafting efficient{" "}
              <span className="text-green-400 font-semibold">
                backend logic
              </span>{" "}
              and intuitive{" "}
              <span className="text-green-400 font-semibold">
                frontend experiences
              </span>{" "}
              that blend performance with simplicity.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col gap-4">
            <div>
              <DownloadCVButton showText={true} />
            </div>
            <div className="flex flex-wrap gap-3">
              <GithubButton showText={false} />
              <LinkedInButton showText={false} />
              <EmailButton showText={false} />
              <TrailheadButton showText={false} />
              <MediumButton showText={false} />
            </div>
          </div>
        </motion.div>

        {/* Right - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center relative"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-center w-full md:h-full">
            <div className="relative w-[325px] sm:w-[340px] md:w-[420px] lg:w-[440px] xl:w-[500px] aspect-square">
              <Image
                src="/profile_photo.jpg"
                alt="Shreya Mangade Profile"
                fill
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Editor Section */}
      <section className="px-5 py-10">
        <EditorWindow files={files} screenTitle="Built With These" speed={80} />
      </section>
    </>
  );
};

export default Home;

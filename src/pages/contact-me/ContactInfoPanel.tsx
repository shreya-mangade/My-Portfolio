"use client";
import React from "react";
import GithubButton from "../../components/buttons/GithubButton";
import LinkedInButton from "../../components/buttons/LinkedInButton";
import TrailheadButton from "../../components/buttons/TrailheadButton";
import MediumButton from "../../components/buttons/MediumButton";
import { IoLocation } from "react-icons/io5";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const ContactInfoPanel: React.FC = () => {
  return (
      <div className="mx-5 px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[var(--color-skill-bg)]">
        {/* Left Side */}
        <div>
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold">
            Shreya Ajit Mangade
          </p>

          <span className="flex items-center mt-3">
            <IoLocation className="mr-2 text-cyan-400" />
            <a
              href="https://maps.app.goo.gl/3wJkJ6RPrGH5KTSH9"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Jose, California (Open To Relocate)
            </a>
          </span>

          <span className="flex items-center mt-2">
            <MdCall className="mr-2 text-cyan-400" />
            <a href="tel:+15624412981">+1 (562) 441 2981</a>
          </span>

          <span className="flex items-center mt-2">
            <MdOutlineEmail className="mr-2 text-cyan-400" />
            <a href="mailto:shreya.mangade@gmail.com">
              shreya.mangade@gmail.com
            </a>
          </span>
        </div>

        {/* Right Side - Social Card */}
        <div className="border border-[var(--color-cyan-light)] rounded-xl p-6 backdrop-blur-md">
          <h3 className="text-center text-[var(--color-cyan-dark)] font-semibold mb-4">
            Let’s Connect the Dots 🔥
          </h3>
          <div className="grid grid-cols-2 gap-4 text-[var(--color-gray-light)] text-sm">
            <GithubButton showText={true} />
            <LinkedInButton showText={true} />
            <TrailheadButton showText={true} />
            <MediumButton showText={true} />
          </div>
        </div>
      </div>
  );
};

export default ContactInfoPanel;

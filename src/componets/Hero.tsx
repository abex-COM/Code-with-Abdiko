import React from "react";
interface SkillCardProps {
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title }) => (
  <div className="flex items-center space-x-2">
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.12,94.15,28.5,128l40.62,33.85"
        stroke="black"
        strokeWidth="16"
      />
    </svg>
    <span className="text-base text-black">{title}</span>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center  ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/40"></div>
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
          I'm <span className="text-green-600">Full Stack</span> Developer
        </h1>
        <p className="text-lg md:text-xl text-black max-w-2xl mb-8">
          I build modern and responsive web & mobile applications. My expertise
          lies in React, Node.js, MongoDB, and Tailwind CSS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard title="React & React Native" />
          <SkillCard title="Tailwind CSS & MUI" />
          <SkillCard title="Node.js & Express" />
          <SkillCard title="MongoDB & Firebase" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

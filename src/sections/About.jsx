import React from "react";
import aboutImg from "../assets/ABOUT.png";

const About = () => (
  <section id="about" className="py-48 bg-[#eef2ff]">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Text */}
      <div className="flex-1 md:pr-12">
        <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-left">About Me</h2>
        <p className="text-gray-700 text-lg mb-8 text-left">
          I believe every project begins with a purpose, the why behind the code. <br></br>Frameworks matter, but impact comes from solving real needs.
        </p>
        <p className="text-gray-700 text-lg text-left mb-8">
          Throughout my journey in tech:<br></br> from online courses to a university degree and internships <br />
          I’ve grown through every challenge and opportunity.
        </p>
        <p className="text-gray-700 text-lg text-left">I aspire to keep blending creativity and curiosity into everything I build</p>
      </div>
      {/* Right: ABOUT.png image, no frame */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
  <img src={aboutImg} alt="About" className="w-90 h-90 object-contain mt-8" />
      </div>
    </div>
  </section>
);

export default About;

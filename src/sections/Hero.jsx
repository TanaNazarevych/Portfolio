// Placeholder image
import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-top justify-between pt-32 pb-0 max-w-5xl mx-auto px-4">
    {/* Left: Text */}
    <div className="flex-1 md:pr-12">
  <h2 className="text-4xl font-bold text-left text-indigo-900">Hey, I'm <span className="text-indigo-600">Tanya</span> <span className="inline-block">👋</span></h2>
      <h1 className="text-5xl font-bold mb-4">
        {/* <span className="text-indigo-600">Front</span><span className="text-indigo-900">end Developer</span> */}
      </h1>
  <p className="text-xl text-gray-700 mb-8">
        I build digital experiences that are purposeful, creative and people-focused.
      </p>
      <div className="flex gap-4">
        <a href="/contact" className="px-6 py-2 rounded-full bg-indigo-100 text-indigo-900 font-semibold border border-indigo-900 hover:bg-indigo-200 transition">Get In Touch</a>
  <a href="#projects" className="px-6 py-2 rounded-full bg-indigo-900 text-white font-semibold border border-indigo-900 hover:bg-indigo-700 transition">Browse Projects</a>
      </div>
    </div>
    {/* Right: Photo */}
    <div className="flex-1 flex justify-center mt-12 md:mt-0">
            <img src={heroImg} alt="Tanya" className="object-cover w-160 h-160" />
    </div>
  </section>
);

export default Hero;

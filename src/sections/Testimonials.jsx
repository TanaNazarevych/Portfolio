import React, { useState } from "react";
import testemBg from "../assets/testem.png";

const testimonials = [
  {
    name: "Michael",
    quote: "Tanya is a creative and driven developer. Highly recommend!",
  },
  {
    name: "Dmitrii",
    quote: "Her attention to detail and passion for learning is inspiring.",
  },
  {
    name: "Tania",
    quote: "A great collaborator and always brings positive energy to the team.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  // Get indices for left, center, right
  const left = (current - 1 + total) % total;
  const right = (current + 1) % total;
  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url(${testemBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-900">Testimonials</h2>
      <div className="flex justify-center items-center gap-6" style={{minHeight: '340px'}}>
        {/* Left card */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-sm w-full text-center cursor-pointer scale-90 opacity-60 transition-all duration-300"
          onClick={() => setCurrent(left)}
        >
          <p className="italic mb-4 text-gray-400">"{testimonials[left].quote}"</p>
          <div className="font-semibold text-gray-400 mb-2">- {testimonials[left].name}</div>
          <a href="https://www.linkedin.com/in/tanya-nazarevych-861840266/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-indigo-500 hover:text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            Reference
          </a>
        </div>
        {/* Center card */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full text-center z-10 scale-105 opacity-100 transition-all duration-300"
        >
          <p className="italic mb-4 text-indigo-900">"{testimonials[current].quote}"</p>
          <div className="font-semibold text-indigo-600 mb-2">- {testimonials[current].name}</div>
          <a href="https://www.linkedin.com/in/tanya-nazarevych-861840266/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-indigo-500 hover:text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            Reference
          </a>
        </div>
        {/* Right card */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-sm w-full text-center cursor-pointer scale-90 opacity-60 transition-all duration-300"
          onClick={() => setCurrent(right)}
        >
          <p className="italic mb-4 text-gray-400">"{testimonials[right].quote}"</p>
          <div className="font-semibold text-gray-400 mb-2">- {testimonials[right].name}</div>
          <a href="https://www.linkedin.com/in/tanya-nazarevych-861840266/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-indigo-500 hover:text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            Reference
          </a>
        </div>
      </div>
      <div className="flex gap-2 mt-6 justify-center">
        {testimonials.map((_, idx) => (
          <span key={idx} className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-indigo-600' : 'bg-indigo-200'}`}></span>
        ))}
      </div>
    </section>
  );
};


export default Testimonials;

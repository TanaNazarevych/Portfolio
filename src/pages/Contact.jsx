import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
  <main className="flex-1 flex flex-col items-center justify-center py-24 bg-indigo-50">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-900 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          I’d love to connect<br /> whether it’s about opportunities, collaborations, or just a good chat about tech.<br />
          Drop me a message or reach out via:
        </p>
      </div>
      <div className="flex gap-12 mt-8">
        <a href="mailto:tanya.vych01@email.com" className="flex items-center gap-2 text-indigo-900 hover:text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.5 6a2.25 2.25 0 01-2.748 0l-7.5-6a2.25 2.25 0 01-.876-1.797V6.75" /></svg>
          Email
        </a>
        <a href="https://www.linkedin.com/in/tanya-nazarevych-861840266/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-900 hover:text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/TanaNazarevych?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-900 hover:text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;

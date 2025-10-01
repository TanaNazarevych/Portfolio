import React from "react";
import inspireImg from "../assets/inspire.png";
import buildingImg from "../assets/building.png";
import createImg from "../assets/create.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Playbook = () => (
  <div className="flex flex-col min-h-screen" style={{ background: '#f8f9fc' }}>
    <Navbar />
    <main className="flex-1 w-full px-0 py-16">
      <h1 className="text-4xl font-semibold text-indigo-800 mb-16 mt-8 text-center">Inspiring, Building & Creating</h1>

      {/* Section 1: Image left, Text right */}
  <section className="flex flex-col md:flex-row items-center w-full px-0 mb-32 gap-8">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={inspireImg} alt="Section 1" className="w-90 h-90 object-contain rounded-xl" />
        </div>
        <div className="md:w-1/2 text-left px-8 md:px-16">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Workshops & Mentorship</h2>
          <p className="text-gray-700 mb-4">Facilitated Girls to Graduates STEM workshops:</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Introduced high school girls to Teachable Machine</li>
            <li>Guided them through building and programming their own Raspberry Pi</li>
            <li>Helped students see tech as approachable, creative, and fun</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Image right, Text left, special background */}
  <section className="flex flex-col md:flex-row-reverse items-center w-full px-0 mb-32 gap-8 py-16" style={{ background: '#e0e7ff' }}>
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={buildingImg} alt="Section 2" className="w-90 h-90 object-contain rounded-xl" />
        </div>
        <div className="md:w-1/2 text-left px-8 md:px-16">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Building With Purpose</h2>
          <p className="text-gray-700 mb-4">One of my proudest contributions was to an AR anatomy tool designed to make online learning more engaging and accessible for students</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Built front-end features and user flows for the AR tool</li>
            <li>Integrated and optimized 3D anatomical models</li>
            <li>Collaborated on UI/UX design to improve accessibility and learning experience</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Image left, Text right */}
  <section className="flex flex-col md:flex-row items-center w-full px-0 mb-32 gap-8">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={createImg} alt="Section 3" className="w-90 h-90 object-contain rounded-xl" />
        </div>
        <div className="md:w-1/2 text-left px-8 md:px-16">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">The Creative Side</h2>
          <p className="text-gray-700 mb-4">Creativity has always been my way of exploring and connecting: whether through painting, sketching, or working with crafts</p>
          <p className="text-gray-700">These passions bring me closer to people and community, and I carry that spirit of imagination and expression into every project I take on</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Playbook;

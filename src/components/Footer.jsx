import React from "react";

const Footer = () => (
  <footer className="w-full py-16 px-12 bg-white text-indigo-900 shadow">
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-start gap-2">
            <span className="text-3xl font-bold">TN&lt;/&gt;</span>
            <div className="text-sm">© {new Date().getFullYear()} Tanya Nazarevych</div>
          </div>
          <nav className="flex gap-8 text-lg items-center">
            <a href="https://www.linkedin.com/in/tanya-nazarevych-861840266/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 ml-6">LinkedIn</a>
            <a href="https://github.com/TanaNazarevych?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
            <a href="mailto:tanya.vych01@email.com" className="hover:text-blue-500">Email</a>
          </nav>
    </div>
  </footer>
);

export default Footer;

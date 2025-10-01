
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home", type: "section" },
  { name: "About", href: "#about", type: "section" },
  { name: "Skills", href: "#skills", type: "section" },
  { name: "Projects", href: "#projects", type: "section" },
  { name: "Playbook", href: "/playbook", type: "page" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  // Highlight section based on hash
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection(window.location.hash.replace("#", "") || "home");
    }
  }, [location]);

  // Scroll to section on click
  const handleSectionClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }, 100);
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="w-full flex items-center px-8 py-4 bg-white shadow">
      {/* Logo */}
      <span className="text-2xl font-bold text-indigo-900">TN</span>
      {/* Navigation links centered */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          {navLinks.map((link) => {
            if (link.type === "section") {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={`font-medium px-2 py-1 rounded-full transition-colors duration-200 ${activeSection === link.href.replace("#", "") && location.pathname === "/" ? "bg-indigo-100 text-indigo-900" : "text-gray-700 hover:text-indigo-700"}`}
                >
                  {link.name}
                </a>
              );
            }
            if (link.type === "page") {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium px-2 py-1 rounded-full transition-colors duration-200 ${location.pathname === link.href ? "bg-indigo-100 text-indigo-900" : "text-gray-700 hover:text-indigo-700"}`}
                >
                  {link.name}
                </a>
              );
            }
            // external
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium px-2 py-1 rounded text-gray-700 hover:text-indigo-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      {/* Let's Chat button on the right */}
      <a
        href="/contact"
        className={`px-6 py-2 rounded-full font-semibold border ml-4 transition ${location.pathname === "/contact" ? "bg-indigo-100 text-indigo-900 border-indigo-900" : "bg-indigo-100 text-indigo-900 border-indigo-900 hover:bg-indigo-200"}`}
      >
        Let's Chat
      </a>
    </nav>
  );
};

export default Navbar;



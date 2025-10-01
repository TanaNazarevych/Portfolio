import React from "react";

const skills = [
  "WEB",
  "MOBILE",
  "DEVELOPMENT",
  "JAVASCRIPT",
  "REACT",
  "UX/UI",
  "GIT",
  "HTML5",
  "SCSS",
];

export default function Skills() {
  return (
    <section id="skills" className="py-bottom-24">
      <div className="border-y border-indigo-200 py-6">
        <div className="flex gap-8 overflow-x-auto px-2 whitespace-nowrap">
            {skills.map((skill, idx) => (
              <span
                key={skill}
                className={`text-indigo-900 font-bold text-xl tracking-wide${idx === 0 ? ' ml-4' : ''}`}
              >
                {skill}
                {idx < skills.length - 1 && (
                  <span className="mx-6 text-indigo-200">/</span>
                )}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
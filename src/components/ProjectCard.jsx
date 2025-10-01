import React from "react";

const ProjectCard = ({ title, description, image, github, demo }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between mx-auto min-w-[320px] w-full" style={{height: 'auto'}}>
    {/* Image at top */}
    <div className="w-full mb-4">
      {image ? (
        <img src={image} alt={title} className="object-cover w-full h-48 rounded-xl" />
      ) : (
        <div className="bg-gray-100 rounded-xl flex items-center justify-center w-full h-48">
          <span className="text-gray-300 text-4xl">🖼️</span>
        </div>
      )}
    </div>
    {/* Title and description */}
    <div className="flex flex-col items-start px-2">
      <h3 className="text-xl font-bold mb-2 text-indigo-900">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">{description}</p>
    </div>
    {/* Buttons at bottom */}
    <div className="flex gap-4 w-full justify-center mt-auto pt-2">
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-indigo-900 hover:underline">GitHub</a>}
      {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Demo</a>}
    </div>
  </div>
);

export default ProjectCard;

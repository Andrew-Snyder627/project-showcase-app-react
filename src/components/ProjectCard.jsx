import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="border border-blue-200 rounded-3xl p-6 shadow-md bg-white bg-opacity-90 backdrop-blur-sm hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}

export default ProjectCard;

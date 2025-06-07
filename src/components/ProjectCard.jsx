import React from "react";

function ProjectCard({ project, onDelete }) {
  return (
    <div className="border border-blue-200 rounded-3xl p-6 shadow-md bg-white bg-opacity-90 backdrop-blur-sm hover:shadow-xl transition relative">
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <button
        onClick={onDelete}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}

export default ProjectCard;

import React from "react";

function ProjectCard({ project, onDelete }) {
  return (
    <div className="border border-blue-100 rounded-xl p-5 shadow bg-white hover:shadow-lg transition-all duration-200">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600">{project.description}</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;

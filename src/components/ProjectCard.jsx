import React from "react";

function ProjectCard({ project, onDelete }) {
  return (
    <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-md bg-gray-50">
      <button
        onClick={onDelete}
        className="border border-gray-400 rounded-md px-4 py-2 text-lg font-bold"
      >
        X
      </button>

      <div>
        <h3 className="font-bold">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleDelete }) {
  return (
    <div className="bg-white p-6 rounded-lg border space-y-4 w-full">
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects to display.</p>
      ) : (
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;

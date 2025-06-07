import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No projects to display.
        </p>
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

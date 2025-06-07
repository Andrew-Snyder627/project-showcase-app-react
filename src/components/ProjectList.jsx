import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleDelete }) {
  return (
    <div className="space-y-4">
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

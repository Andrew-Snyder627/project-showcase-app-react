import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./styles/App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteProject = (indexToDelete) => {
    setProjects((prevProjects) =>
      prevProjects.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[400px] space-y-6">
        <Header />
        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProjectList
          projects={filteredProjects}
          handleDelete={handleDeleteProject}
        />
      </div>
    </div>
  );
}

export default App;

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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 flex justify-center items-center py-20 px-4">
      <div className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 space-y-10">
        <Header />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProjectForm onAddProject={handleAddProject} />
        <ProjectList
          projects={filteredProjects}
          handleDelete={handleDeleteProject}
        />
      </div>
    </div>
  );
}

export default App;

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
    <div className="min-h-screen bg-[#eef3fb] flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-8 border border-blue-100">
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

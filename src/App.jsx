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

  return (
    <div className="App">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;

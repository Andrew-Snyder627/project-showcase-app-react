import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both the title and description.");
      return;
    }
    onAddProject({ title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-blue-300 rounded-full px-6 py-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-400"
        />
      </div>
      <div>
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-blue-300 rounded-3xl px-6 py-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-400"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={!title || !description}
        className={`${
          !title || !description
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white font-semibold py-4 px-8 rounded-full transition shadow-lg`}
      >
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;

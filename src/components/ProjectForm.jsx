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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Project Title</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-blue-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">
          Project Description
        </label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-blue-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={!title || !description}
        className={`w-full ${
          !title || !description
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white font-semibold py-3 px-6 rounded-lg shadow-md transition`}
      >
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;

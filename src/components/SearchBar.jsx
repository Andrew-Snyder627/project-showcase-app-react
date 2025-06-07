import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-blue-300 rounded-full px-6 py-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBar;

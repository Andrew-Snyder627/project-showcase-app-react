import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-blue-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 placeholder-gray-400 transition"
      />
    </div>
  );
}

export default SearchBar;

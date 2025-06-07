import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition"
      />
    </div>
  );
}

export default SearchBar;

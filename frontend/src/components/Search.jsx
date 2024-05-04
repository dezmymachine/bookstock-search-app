import React from "react";

const Search = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="max-w-md p-5 mx-auto">
      <input
        type="text"
        placeholder="Search book,author"
        className="rounded shadow-md p-2 w-full"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

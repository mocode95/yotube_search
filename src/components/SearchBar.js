import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="row mt-3 search-bar">
      <form onSubmit={onSubmit} className="card p-3 w-100">
        <div className="form-group">
          <label>Video Search</label>
          <input
            type="text"
            className="form-control"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

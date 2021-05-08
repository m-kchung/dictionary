import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for... ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <div className="searchSection">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            autoComplete="off"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
    </div>
  );
}

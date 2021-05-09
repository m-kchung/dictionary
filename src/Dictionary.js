import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // API documentation link: https://dictionaryapi.dev/
    let languageCode = "en_GB";
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${languageCode}/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}

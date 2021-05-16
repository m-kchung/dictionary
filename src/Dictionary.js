import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { FaSearch } from "react-icons/fa";

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
      <h1>Dictionary</h1>
      <div className="search">
        <div className="searchHeading">What word do you want to look up?</div>
        <div className="searchSection">
          <form onSubmit={search}>
            <span className="searchIcon">
              <FaSearch />
            </span>
            <input
              type="search"
              placeholder="Search for a word"
              autoComplete="off"
              onChange={handleKeywordChange}
              className="searchBar"
            />
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}

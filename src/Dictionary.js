import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState("");
  const [language, setLanguage] = useState("en_GB");

  function setBritishEnglish(event) {
    event.preventDefault();
    setLanguage("en_GB");
  }

  function setAmericanEnglish(event) {
    event.preventDefault();
    setLanguage("en_US");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    // API documentation link: https://dictionaryapi.dev/
    let languageCode = language;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${languageCode}/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001dca4a46a87674ac68e77541e5c042b95";
    let pexelsHeaders = { Authorization: `Bearer ${pexelsApiKey}` };
    let imageCount = 6;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=${imageCount}`;
    axios
      .get(pexelsApiUrl, {
        headers: pexelsHeaders,
      })
      .then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  if (loaded && language === "en_GB") {
    return (
      <div className="Dictionary">
        <div className="backgroundTop">
          <div className="Menu">
            <div className="dropdown">
              <button className="dropbtn">
                🇬🇧 <RiArrowDownSLine />
              </button>
              <div className="dropdown-content">
                <a href="/" onClick={setAmericanEnglish}>
                  🇺🇸
                </a>
              </div>
            </div>
          </div>

          <div className="topSection">
            <div className="searchHeading">
              <h1>Dictionary</h1>
            </div>
            <div className="search">
              <span className="searchForm">
                <form onSubmit={handleSubmit}>
                  <button type="submit" className="searchIcon searchButton">
                    <FaSearch />
                  </button>
                  <input
                    type="search"
                    placeholder="Search for a word"
                    autoComplete="off"
                    onChange={handleKeywordChange}
                    className="searchBar"
                    defaultValue={props.defaultKeyword}
                  />
                </form>
              </span>
            </div>
          </div>
        </div>
        <div className="resultsSection">
          <Results results={results} />
          <Images images={images} keyword={keyword} />
        </div>
      </div>
    );
  }
  if (loaded && language === "en_US") {
    return (
      <div className="Dictionary">
        <div className="backgroundTop">
          <div className="Menu">
            <div className="dropdown">
              <button className="dropbtn">
                🇺🇸 <RiArrowDownSLine />
              </button>
              <div className="dropdown-content">
                <a href="/" onClick={setBritishEnglish}>
                  🇬🇧
                </a>
              </div>
            </div>
          </div>

          <div className="topSection">
            <div className="searchHeading">
              <h1>Dictionary</h1>
            </div>
            <div className="search">
              <span className="searchForm">
                <form onSubmit={handleSubmit}>
                  <button type="submit" className="searchIcon searchButton">
                    <FaSearch />
                  </button>
                  <input
                    type="search"
                    placeholder="Search for a word"
                    autoComplete="off"
                    onChange={handleKeywordChange}
                    className="searchBar"
                    defaultValue={props.defaultKeyword}
                  />
                </form>
              </span>
            </div>
          </div>
        </div>
        <div className="resultsSection">
          <Results results={results} />
          <Images images={images} keyword={keyword} />
        </div>
      </div>
    );
  } else {
    load();

    return "loading";
  }
}

import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import { FaSearch } from "react-icons/fa";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState("");

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
    let languageCode = "en_GB";
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${languageCode}/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001dca4a46a87674ac68e77541e5c042b95";
    let pexelsHeaders = { Authorization: `Bearer ${pexelsApiKey}` };
    let imageCount = 9;
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

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <div className="search">
          <div className="searchHeading">What word do you want to look up?</div>
          <div className="searchSection">
            <form onSubmit={handleSubmit}>
              <span className="searchIcon">
                <FaSearch />
              </span>
              <input
                type="search"
                placeholder="Search for a word"
                autoComplete="off"
                onChange={handleKeywordChange}
                className="searchBar"
                defaultValue={props.defaultKeyword}
              />
            </form>
          </div>
        </div>
        <Results results={results} />
        <Images images={images} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}

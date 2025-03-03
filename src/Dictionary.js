import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();

    let apiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleInput(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="title">Dictionary</h1>
      <section>
        <h1 className="titleQuestion">What word do you want to look up?</h1>
        <form onSubmit={Search}>
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleInput}
          />
        </form>
        <div className="Hint">
          Suggested words: running, travel, yoga, chocolate
        </div>
      </section>
      <br />
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./search.css";

function Search() {
  return <ImageL />;
}

function ImageL() {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState("");
  const [click, setClick] = useState(false);
  function handleChange(event) {
    const image = event.target.value;

    setImage(image);
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          image +
          "&client_id=sxyRt6RetJf2ns7MHl19MB367avoBSOeetqVxKtUOuE"
      )
      .then((data) => {
        setResult(data.data.results);
      });
  }
  // const myImage = "../src/images/main.png";
  return (
    <>
      <div id="search">
        <h3> Search The Image </h3>
        <form onSubmit={handleSubmit}>
          <input
            id="input"
            onChange={handleChange}
            type="text"
            placeholder=" search..."
          />
          <br />
          <button onClick={showButton} id="button">
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
      <div id="output">
        {result.map((image) => (
          <a href={image.links.html} target="_blank" rel="noopener noreferrer">
            {" "}
            <img alt={image.alt_description} src={image.urls.small} />
          </a>
        ))}

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/"
        >
          {!click && (
            <button className="buttonMore" id="button">
              More...
            </button>
          )}
        </a>
      </div>
    </>
  );
  function showButton() {
    setClick(true);
    if (image.length === 0) {
      alert("fill the input first ");
    }
    const button = document.getElementsByClassName("buttonMore")[0];
    button.style.display = "inline-block";
  }
}
export default Search;

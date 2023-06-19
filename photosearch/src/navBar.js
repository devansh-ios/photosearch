import React from "react";
import "./index.css";
import arrow from "../src/assets/images/arrow.png";
function Navbar() {
  const myImage = "../src/assets/images/main.png";

  return (
    <>
      <div
        className="NavBarContainer"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <nav>
          <div id="logo">
            <h3> imagEkart</h3>
          </div>

          <ul>
            <li>
              <a href="#"> HOME</a>
            </li>
            <li>
              <a href="#search"> SEARCH</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="intro">get in the world of the images</div>
        <img id="arrow" src={arrow} alt="arrow down " />
      </div>
    </>
  );
}
export default Navbar;

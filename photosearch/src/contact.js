import React from "react";
import "./contact.css"
function Contact() {
  return (
    <>
      <div id="contact">
        <h2>💖 to hear from you .....</h2>
        <form  >
          <input type="email" placeholder="enter your email" /><br/>
          <input type="password" placeholder="enter your password" /><br/>
          <textarea type="text"  id="textArea" placeholder="enter your message" /><br/>
          <button  id="button">
            Submit...
          </button>
        </form>
      </div>

      <div className="submit">
        
        <p> It is just a demo page ....</p>
        <br />
        <p>we don't store any email and password</p>
        <a href="https://www.linkedin.com/in/devansh-kumar-9798b21ba/">
          <p>
            Made with <span role="img">💖💖💖</span>
          </p>
        </a>
      </div>
    </>
  );

  
}

export default Contact;

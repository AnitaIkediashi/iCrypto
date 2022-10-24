import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <h1 className="brand">
          <Link>
            iCrypto
          </Link>
        </h1>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/anita-ikediashi-a61668188"
            target="_blank" rel="noopener noreferrer"
          ><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://twitter.com/Anita_ikediashi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/AnitaIkediashi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github-alt" ></i></a>
        </div>
      </div>
      <small className="author">Copyright &copy; 2022 Anita Ikediashi</small>
    </footer>
  );
};

export default Footer;

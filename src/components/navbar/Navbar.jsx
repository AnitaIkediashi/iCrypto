import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import "./navbar.css";

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <nav>
      <div className="container nav__container">
        <h1 className="brand" onClick={() => setShowNav(false)}>
          <Link>
            i<span>Crypto</span>
          </Link>
        </h1>
        <ul className={showNav ? "nav__links active" : "nav__links"}>
          {navLinks.map(({ id, link, path }) => {
            return (
              <li key={id} onClick={() => setShowNav(!showNav)}>
                <NavLink to={link}>{path}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="btn btn__primary">Download App</button>
        <div className="nav__btn" onClick={() => setShowNav(!showNav)}>
          {
            showNav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

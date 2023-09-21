import React, { useState } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <div className="first">
        <div className="left">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
          </div>

          <div className="logo">
            <img src="./img/recipe.png" alt="Logo" />
          </div>
        </div>
        <div className="site-name">Recipees</div>
        <div className="right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="login-signup">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul
          className="menu"
          style={{
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            gap: "20px",
            flex_direction: "column",
            backgroundColor: "rgb(138, 43, 8)",
            position: "absolute",
            top: "60px",
            right: 0,
            width: "100%",
            padding: "10px",
            marginTop: -2,
          }}
        >
          <li>
            <Link
              style={{
                color: "black", // Sets the link color to grey
                textDecoration: "none", // Removes the underline
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "black", // Sets the link color to grey
                textDecoration: "none", // Removes the underline
              }}
              to="/recipe"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "black", // Sets the link color to grey
                textDecoration: "none", // Removes the underline
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "black", // Sets the link color to grey
                textDecoration: "none", // Removes the underline
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navigation;

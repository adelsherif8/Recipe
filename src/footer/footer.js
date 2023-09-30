import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/img/recipe.png" alt="Logo" />
          <h2>Your Recipe Site</h2>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/recipe">Recipes</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Recipe Site. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

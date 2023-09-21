import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./nav-bar/Navigation";
import Header from "./Header/header";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Header pageTitle="Home" />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

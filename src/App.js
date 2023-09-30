import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./nav-bar/Navigation";
import Header from "./Header/header";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";
import Body from "./body/Body";
import Slideshow from "./body/Meals/Breakfast1";
import RecipeDetail from "./body/RecipeDetail"; // Import the RecipeDetail component
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header pageTitle="Home" />
                <Body />
                <Footer />
              </>
            }
          />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/image/breakfast/:id" element={<RecipeDetail />} />{" "}
          <Route path="/image/meal/:id" element={<RecipeDetail />} />{" "}
          <Route path="/recipe/:id" element={<RecipeDetail />} />{" "}
          {/* Route for RecipeDetail */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

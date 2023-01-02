import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import "./App.css"; 
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app">
      <header className="header container"
        style={{ alignItems: "center", fontFamily: "cursive", fontSize: "1.5rem" }}>
        <div className="brand">Recipe Finder</div>
        <div style={{ marginLeft: "auto" }}>
          <ThemeToggle />
        </div>
      </header>

      <Home />
    </div>
  );
}

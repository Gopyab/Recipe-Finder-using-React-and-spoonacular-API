import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.08)",
        background: "transparent",
        cursor: "pointer",
        fontWeight: 600
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
      <span style={{ fontSize: 14 }}>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}

import React, { useState } from "react";
import { findByIngredients, getRecipeInformation } from "../api";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalRecipe, setModalRecipe] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const searchRecipes = async () => {
    if (!query.trim()) {
      setError("Type one or more ingredients (comma separated).");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await findByIngredients(query, 12);
      setRecipes(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  const openRecipe = async (id) => {
    setModalRecipe(null);
    setModalLoading(true);
    try {
      const info = await getRecipeInformation(id);
      setModalRecipe(info);
    } catch (err) {
      console.error(err);
      alert("Failed to load recipe details.");
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="search-row" role="search">
        <input
          className="search-input"
          placeholder="Enter ingredients (comma separated) — e.g. chicken, tomato"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") searchRecipes(); }}
          aria-label="Search ingredients"
        />
        <button className="search-button" onClick={searchRecipes} disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </div>

      {error && <div className="center" role="alert" style={{ color: "crimson" }}>{error}</div>}

      {!loading && recipes.length === 0 && !error && (
        <div className="center">No recipes yet — try searching for <strong>chicken</strong> or <strong>tomato</strong>.</div>
      )}

      {loading && <div className="center">Loading recipes…</div>}

      <section className="recipe-grid" aria-live="polite">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} onOpen={openRecipe} />
        ))}
      </section>

      <footer className="footer">Built with React • Uses Spoonacular API</footer>

      {/* Modal area */}
      {modalLoading && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="center">Loading recipe details…</div>
          </div>
        </div>
      )}
      {modalRecipe && <RecipeModal recipe={modalRecipe} onClose={() => setModalRecipe(null)} />}
    </main>
  );
}

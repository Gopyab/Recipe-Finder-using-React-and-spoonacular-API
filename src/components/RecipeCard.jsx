import React from "react";

export default function RecipeCard({ recipe, onOpen }) {
  // recipe shape from Spoonacular findByIngredients:
  // { id, title, image, usedIngredientCount, missedIngredientCount, ... }
  return (
    <article className="recipe-card" onClick={() => onOpen(recipe.id)} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(recipe.id); }}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <div className="card-title">{recipe.title}</div>
        <div className="card-meta">
          Used: {recipe.usedIngredientCount} • Missing: {recipe.missedIngredientCount}
        </div>
      </div>
    </article>
  );
}

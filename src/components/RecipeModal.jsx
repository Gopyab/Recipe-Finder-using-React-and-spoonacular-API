import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>

        <h2 style={{ marginTop: 6 }}>{recipe.title}</h2>

        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} style={{ width: "100%", borderRadius: 8, marginTop: 12 }} />
        )}

        <section style={{ marginTop: 12 }}>
          <strong>Ready in:</strong> {recipe.readyInMinutes ?? "—"} min • <strong>Servings:</strong> {recipe.servings ?? "—"}
        </section>

        <section style={{ marginTop: 12 }}>
          <h3>Ingredients</h3>
          <ul>
            {recipe.extendedIngredients?.map((ing) => (
              <li key={ing.id || ing.name}>{ing.original}</li>
            )) || <li>No data</li>}
          </ul>
        </section>

        <section style={{ marginTop: 12 }}>
          <h3>Instructions</h3>
          {recipe.instructions ? (
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          ) : (
            <p>No instructions available. Try the source link below.</p>
          )}
        </section>

        {recipe.sourceUrl && (
          <p style={{ marginTop: 12 }}>
            <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">Open source page</a>
          </p>
        )}
      </div>
    </div>
  );
}

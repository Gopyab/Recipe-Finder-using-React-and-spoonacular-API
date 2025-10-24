import axios from "axios";

const BASE = "https://api.spoonacular.com";

const apiKey = process.env.REACT_APP_SPOONACULAR_KEY;

// helper: search by ingredients
export async function findByIngredients(ingredients, number = 12) {
  if (!apiKey) throw new Error("Missing API key in REACT_APP_SPOONACULAR_KEY");
  const res = await axios.get(`${BASE}/recipes/findByIngredients`, {
    params: { ingredients, number, apiKey },
  });
  return res.data;
}

// helper: get recipe information (detailed)
export async function getRecipeInformation(id) {
  if (!apiKey) throw new Error("Missing API key in REACT_APP_SPOONACULAR_KEY");
  const res = await axios.get(`${BASE}/recipes/${id}/information`, {
    params: { apiKey },
  });
  return res.data;
}

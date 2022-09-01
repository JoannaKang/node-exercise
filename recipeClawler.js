import fetch from "node-fetch";
import fs from "fs/promises";
let AllRecipes = [];
let AllIngredients = [];

async function fetchRecipe() {
  const Alphabets = "abcdefghigklmnopqrstuvwxyz";
  let mealsbyAlphabet = [];
  let res = [];

  for (let i = 0; i < Alphabets.length; i++) {
    res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${Alphabets[i]}`
    );
    const apiResponse = await res.json();
    mealsbyAlphabet.push(apiResponse);
  }

  AllRecipes = mealsbyAlphabet
    .flatMap((el) => el.meals)
    .filter((el) => el !== null);
}

async function fetchIngredientsList() {
  await fetchRecipe();
  const strIngredient = "strIngredient";
  const properties = Object.keys(AllRecipes[0]);

  for (let j = 0; j < AllRecipes.length; j++) {
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].includes(strIngredient)) {
        AllIngredients.push(AllRecipes[j][properties[i]]);
      }
    }
  }

  AllIngredients = AllIngredients.filter((el) => el !== "").filter(
    (el) => el !== null
  );
  AllIngredients = AllIngredients.map((el) => el.toLowerCase());
  AllIngredients = AllIngredients.filter(
    (item, index) => AllIngredients.indexOf(item) === index
  );
  console.log("inIngredeintlist", AllIngredients);
  fs.writeFile("ingredient.txt", AllIngredients, "utf-8", function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("it is saved");
    }
  });
  return AllIngredients;
}

export default fetchIngredientsList;

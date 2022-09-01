import http from "http";
import fetchIngredientsList from "./recipeClawler.js";

const server = http.createServer((req, res) => {
  console.log(req, res);
  if (req.url === "/") {
    res.write("Hello world!");

    res.end();
  }
});

try {
  server.listen(8080);
  fetchIngredientsList();
  console.log("🚀server is listening on port 3000!");
} catch (e) {
  console.log(e);
}

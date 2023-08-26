import card from "./components/card.js";
import getCountries from "./components/script.js";
import Navigation from "./components/navigation.js";
import "./node_modules/normalize.css";
import "./sass/style.scss";
const app = document.getElementById("app");
async function countries() {
  try {
    const sortedCountries = await getCountries();
    app.innerHTML = Navigation() + card(sortedCountries);
  } catch (error) {
    document.write(`internal API error ${error.message}`);
  }
}
countries();

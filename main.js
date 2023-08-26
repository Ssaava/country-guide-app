import getCountries from "./modules/api.js";
import Navigation from "./components/navigation.js";
import card from "./components/card.js";
import switchMode from "./modules/switchMode.js";
import { searchCountry, searchedCountry } from "./modules/functions.js";
import "./node_modules/normalize.css";
// import "./sass/style.scss";
import "./css/style.css";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const app = document.getElementById("app");
const searchInputValue = localStorage.getItem("searchInput");
async function countries() {
  try {
    const sortedCountries = await getCountries();
    app.innerHTML = Navigation() + card(sortedCountries);
    const countriesContainer = document.querySelector(".cards-container");
    const searchInput = document.querySelector("input[name='search']");
    if (searchInputValue !== "") {
      searchInput.value = searchInputValue;
      searchedCountry(sortedCountries, countriesContainer, searchInputValue);
    }
    searchCountry(countriesContainer, searchInput, sortedCountries);
    switchMode();
  } catch (error) {
    document.write(`make sure your correct the error ${error.message}`);
  }
}
countries();

/**
 * Key features of the Country Guide website
            * country name
            * population
            * capital
            * language spoken 
            *currency used
            * timezones
            * regional blocs
            * The flags of the country
            * 
* The search bar functionality
*    users shall be inposition to search for country by country code or country name

*The link to the country API https://restcountries.com/v3.1/all


Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*
 */
// the variables that we are gonna use in the app

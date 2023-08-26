import { generateCard } from "../components/card";
const verifyCapital = (country) => {
  if (country.capital === undefined) {
    return "No capital";
  }
  return country.capital[0];
};

// search operations

const searchedCountry = (sortedCountries, countriesContainer, query) => {
  const filteredCountries = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  verifySearchedCountry(countriesContainer, filteredCountries);
};
const verifySearchedCountry = (countriesContainer, newArray) => {
  if (newArray.length <= 0) {
    countriesContainer.innerHTML =
      "<h3 class='text-danger'>There is no such country<h3>";
  } else {
    countriesContainer.innerHTML = "";
    const cardHtml = newArray.map(generateCard).join("");
    countriesContainer.innerHTML = cardHtml;
  }
};

const searchCountry = (countriesContainer, searchInput, sortedCountries) => {
  searchInput.addEventListener("input", (e) => {
    e.preventDefault();
    // filterInputValue = localStorage.setItem("filterInput", "");
    localStorage.setItem("searchInput", searchInput.value);
    searchedCountry(sortedCountries, countriesContainer, searchInput.value);
  });
};

export { verifyCapital, verifySearchedCountry, searchedCountry, searchCountry };
export default verifyCapital;

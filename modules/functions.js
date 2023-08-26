import { generateCard } from "../components/card";
const verifyCapital = (country) => {
  if (country.capital === undefined) {
    return "No capital";
  }
  return country.capital[0];
};

// search operations
// function will be used for filter functionality
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

// function to be used for search only
const searchCountry = (
  countriesContainer,
  searchInput,
  sortedCountries,
  filteredList
) => {
  searchInput.addEventListener("input", (e) => {
    e.preventDefault();
    localStorage.setItem("filterInput", "");
    localStorage.setItem("searchInput", searchInput.value);
    filteredList.value = "All Countries";
    searchedCountry(sortedCountries, countriesContainer, searchInput.value);
  });
};

// filtering countries

const filteredCountry = (sortedCountries, countriesContainer, query) => {
  const filteredCountries = sortedCountries.filter((country) =>
    country.region.toLowerCase().includes(query.toLowerCase())
  );
  verifyFilteredCountry(countriesContainer, filteredCountries);
};
const verifyFilteredCountry = (countriesContainer, newArray) => {
  if (newArray.length <= 0) {
    countriesContainer.innerHTML =
      "<h3 class='text-danger'>There is no such country<h3>";
  } else {
    countriesContainer.innerHTML = "";
    const cardHtml = newArray.map(generateCard).join("");
    countriesContainer.innerHTML = cardHtml;
  }
};

function filterCountry(
  countriesContainer,
  filteredList,
  sortedCountries,
  searchInput
) {
  filteredList.addEventListener("change", (e) => {
    e.preventDefault();

    if (filteredList.value.includes("All Countries")) {
      const cardHtml = sortedCountries.map(generateCard).join("");
      countriesContainer.innerHTML = "";
      countriesContainer.innerHTML = cardHtml;
    } else {
      countriesContainer.innerHTML = "";
      filteredCountry(sortedCountries, countriesContainer, filteredList.value);
    }
    // clear the input fields
    localStorage.setItem("filterInput", filteredList.value);
    localStorage.setItem("searchInput", "");
    searchInput.value = "";
  });
}
export {
  verifyCapital,
  verifySearchedCountry,
  searchedCountry,
  searchCountry,
  filterCountry,
  filteredCountry,
};
export default verifyCapital;

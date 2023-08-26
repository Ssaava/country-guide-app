import { generateCard } from "../components/card";

function filteredCountry() {
  filteredList.addEventListener("change", (e) => {
    e.preventDefault();

    if (filteredList.value.includes("All Countries")) {
      countriesContainer.innerHTML = "";
      arrayOperations(sortedCountries);
    } else {
      newArray = filteredCountry(sortedCountries, filteredList.value);
      countriesContainer.innerHTML = "";
      arrayOperations(newArray);
    }
    // clear the input fields
    filterInputValue = localStorage.setItem("filterInput", filteredList.value);
    searchInputValue = localStorage.setItem("searchInput", "");
    searchInput.value = "";
  });
}

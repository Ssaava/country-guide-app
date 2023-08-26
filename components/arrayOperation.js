const arrayOperations = (sortedCountries) => {
  sortedCountries.forEach((element) => {
    console.log(element);
  });
};
const verifyCapital = (country) => {
  if (country.capital === undefined) {
    return "No capital";
  }

  return country.capital[0];
};
const verifySearchedCountry = () => {
  if (newArray.length <= 0) {
    cardsContainer.innerHTML =
      "<h3 class='text-danger'>There is no such country<h3>";
  } else {
    cardsContainer.innerHTML = "";
    arrayOperations(newArray);
  }
};
export { verifyCapital, verifySearchedCountry };
export default arrayOperations;

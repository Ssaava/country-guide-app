fetch("../assets/data.json")
  .then(function (response) {
    return response.json();
  })
  .then((data) => console.log("Fetched Data: ", data))
  .finally((err) => console.log("Error: ", err));
const url =
  "https://restcountries.com/v3.1/all?fields=name,borders,flags,languages,population,capital,currencies";

async function getCountries() {
  try {
    const response = await fetch(url);
    const countries = await response.json();

    const sortedCountries = countries.sort((a, b) => {
      const countryA = a.name.common.toLowerCase();
      const countryB = b.name.common.toLowerCase();
      if (countryA < countryB) return -1;
      if (countryA > countryB) return 1;
      return 0;
    });
    return sortedCountries;
  } catch (err) {
    document.write(err);
  }
}
getCountries();
export default getCountries;

import Country from "./Country";
import ResultItem from "./ResultItem";

function Results({ searchTerm, countries, handleShowButton }) {
  if (searchTerm === "") {
    return <div></div>;
  }

  const filteredCountries = countries.filter(
    ({ name }) => name.common.toLowerCase().indexOf(searchTerm) !== -1
  );

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <>
      {filteredCountries.length === 1 ? (
        <Country
          key={filteredCountries[0].name.common}
          country={filteredCountries[0]}
        />
      ) : (
        filteredCountries.map(({ name }) => (
          <ResultItem
            key={name.common}
            name={name.common}
            handleShowButton={handleShowButton}
          />
        ))
      )}
    </>
  );
}

export default Results;

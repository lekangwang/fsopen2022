import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowButton = (name) => {
    setSearchTerm(name.toLowerCase());
  };

  return (
    <div className="App">
      <div>
        find countries
        <input value={searchTerm} onChange={handleSearchTerm} />
        <Results
          searchTerm={searchTerm}
          countries={countries}
          handleShowButton={handleShowButton}
        />
      </div>
    </div>
  );
}

export default App;

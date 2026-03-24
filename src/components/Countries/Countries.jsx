import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ CountriesPromise }) => {
  const [visited, setVisited] = useState([]);
  const handleVisitedCountry = (country) => {
    const newVisited = [...visited , country];
    setVisited(newVisited);
  };

  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      All Countries : {countries.length}
      <h3>Total country visited : {visited.length}</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

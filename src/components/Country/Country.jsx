import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry }) => {
  console.log(country.flags.flags);
  console.log(handleVisitedCountry);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name :{country.name.common}</h3>
      <p>Population : {country.population.population}</p>
      <p>
        Area : {country.area.area}
        {country.area.area > 30000 ? "Big country" : "Small country"}
      </p>
       <p>Region : {country.region.region}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;

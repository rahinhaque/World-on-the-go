import React, { use } from 'react'

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return <div>
   
    All Countries : {countries.length}

  </div>;
};

export default Countries
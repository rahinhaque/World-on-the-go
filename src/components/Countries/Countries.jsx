import React, { use } from 'react'
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div >
      All Countries : {countries.length}
      <div className="countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries
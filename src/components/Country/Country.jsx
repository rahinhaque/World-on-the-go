import React from 'react';
import './country.css'

const Country = ({country}) => {
 console.log(country.flags.flags);
 return (
   <div className="country">
     <img src={country.flags.flags.png} alt="" />
     <h3>Name :{country.name.common}</h3>
     <p>Population : {country.population.population}</p>
   </div>
 );
};

export default Country;
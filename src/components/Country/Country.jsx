import React, { useState } from "react";
import "./country.css";

const Country = ({
  country,
  handleVisitedCountry,
  countrylist,
  handleShowFlag,
}) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountry(country);
    countrylist(country.name.common);
  };

  const formatPopulation = (pop) => {
    if (pop >= 1_000_000_000) return (pop / 1_000_000_000).toFixed(1) + 'B';
    if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + 'M';
    if (pop >= 1_000) return (pop / 1_000).toFixed(1) + 'K';
    return pop.toString();
  };

  const formatArea = (area) => {
    if (area >= 1_000_000) return (area / 1_000_000).toFixed(2) + 'M km²';
    if (area >= 1_000) return (area / 1_000).toFixed(1) + 'K km²';
    return area + ' km²';
  };

  const capital = country.capital?.capital?.[0] || 'N/A';

  return (
    <div className={`country ${visited ? "country-visited" : ""}`} id={`country-${country.cca3?.cca3 || country.name.common}`}>
      {/* Flag Image */}
      <div className="country__flag-wrapper">
        <img
          src={country.flags.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country__flag"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="country__body">
        {/* Country Name + Region */}
        <h3 className="country__name">
          {country.name.common}
          <span className="country__region-badge">{country.region.region}</span>
        </h3>

        {/* Info Grid */}
        <div className="country__info">
          <div className="country__info-item">
            <span className="country__info-label">👥 Population</span>
            <span className="country__info-value">
              {formatPopulation(country.population.population)}
            </span>
          </div>

          <div className="country__info-item">
            <span className="country__info-label">📐 Area</span>
            <span className="country__info-value">
              {formatArea(country.area.area)}
              <span className={`country__info-tag ${country.area.area > 30000 ? 'country__info-tag--big' : 'country__info-tag--small'}`}>
                {country.area.area > 30000 ? "Large" : "Small"}
              </span>
            </span>
          </div>

          <div className="country__info-item country__info-item--full">
            <span className="country__info-label">🏛️ Capital</span>
            <span className="country__info-value">{capital}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="country__actions">
          <button
            className={`country__btn ${visited ? "country__btn--visited" : "country__btn--visit"}`}
            onClick={handleVisited}
            id={`visit-btn-${country.cca3?.cca3 || country.name.common}`}
          >
            {visited ? "✓ Visited" : "✈️ Mark Visited"}
          </button>
          <button
            className="country__btn country__btn--flag"
            onClick={() => handleShowFlag(country.flags.flags.png)}
            id={`flag-btn-${country.cca3?.cca3 || country.name.common}`}
          >
            🏳️ Collect Flag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;

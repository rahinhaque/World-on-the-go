import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ CountriesPromise }) => {
  const [visited, setVisited] = useState([]);
  const handleVisitedCountry = (country) => {
    const newVisited = [...visited, country];
    setVisited(newVisited);
  };

  const [visitedList, setVisitedList] = useState([]);

  const countrylist = (country) => {
    const newList = [...visitedList, country];
    setVisitedList(newList);
  };

  const [showFlag, setShowFlag] = useState([]);

  const handleShowFlag = (flags) => {
    const newShowFlag = [...showFlag, flags];
    setShowFlag(newShowFlag);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;

  // Filter logic
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || country.region.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = ["All", ...new Set(countries.map((c) => c.region.region))];

  return (
    <div>
      {/* Stats Bar */}
      <div className="stats-bar" id="stats-bar">
        <div className="stat-card">
          <div className="stat-card__icon stat-card__icon--countries">🌍</div>
          <div className="stat-card__info">
            <span className="stat-card__label">Countries</span>
            <span className="stat-card__value">{countries.length}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon stat-card__icon--visited">✈️</div>
          <div className="stat-card__info">
            <span className="stat-card__label">Visited</span>
            <span className="stat-card__value">{visited.length}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon stat-card__icon--flags">🏳️</div>
          <div className="stat-card__info">
            <span className="stat-card__label">Flags</span>
            <span className="stat-card__value">{showFlag.length}</span>
          </div>
        </div>
      </div>

      {/* Visited Flags */}
      {showFlag.length > 0 && (
        <div className="visited-flags-section">
          <div className="visited-flags-section__header">
            <span className="visited-flags-section__title">🏴 Collected Flags</span>
            <span className="visited-flags-section__count">{showFlag.length}</span>
          </div>
          <div className="visited-flags-container">
            {showFlag.map((flag, index) => (
              <img
                key={index}
                src={flag}
                alt="Visited country flag"
                className="visited-flag-img"
              />
            ))}
          </div>
        </div>
      )}

      {/* Visited List */}
      {visitedList.length > 0 && (
        <div className="visited-list-section">
          <div className="visited-list-section__header">
            <span className="visited-list-section__title">📋 Visited Countries</span>
          </div>
          <div className="visited-list-container">
            {visitedList.map((country, index) => (
              <span key={index} className="visited-list-tag">
                <span className="visited-list-tag__number">{index + 1}</span>
                {country}
              </span>
            ))}
          </div>
        </div>
      )}

      {(showFlag.length > 0 || visitedList.length > 0) && (
        <div className="section-divider"></div>
      )}

      {/* Search Bar */}
      <div className="search-bar" id="search-bar">
        <div className="search-bar__inner">
          <span className="search-bar__icon">🔍</span>
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search countries by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="country-search-input"
          />
          <button
            className={`search-bar__filter-btn ${selectedRegion !== "All" ? "search-bar__filter-btn--active" : ""}`}
            onClick={() => setSelectedRegion("All")}
            id="clear-filters-btn"
          >
            {selectedRegion !== "All" ? "✕ Clear" : "⚡"} <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Region Filters */}
      <div className="region-filters" id="region-filters">
        {regions.map((region) => (
          <button
            key={region}
            className={`region-filter-btn ${selectedRegion === region ? "region-filter-btn--active" : ""}`}
            onClick={() => setSelectedRegion(region)}
            id={`region-filter-${region.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {region === "All" && "🌐 "}
            {region === "Africa" && "🌍 "}
            {region === "Americas" && "🌎 "}
            {region === "Asia" && "🌏 "}
            {region === "Europe" && "🏰 "}
            {region === "Oceania" && "🏝️ "}
            {region === "Antarctic" && "🧊 "}
            {region}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="results-count">
        Showing <span className="results-count__number">{filteredCountries.length}</span> of{" "}
        {countries.length} countries
      </p>

      {/* Country Cards Grid */}
      <div className="countries" id="countries-grid">
        {filteredCountries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            countrylist={countrylist}
            handleShowFlag={handleShowFlag}
            index={index}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

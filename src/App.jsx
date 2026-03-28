
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json());
  
function App() {
  return (
    <>
      {/* Hero Header */}
      <header className="app-header" id="app-header">
        <div className="app-header__badge">
          <span className="app-header__badge-dot"></span>
          Live Data
        </div>
        <h1 className="app-header__title">Country on the Go</h1>
        <p className="app-header__subtitle">
          Explore nations around the world — flags, stats, and stories at your fingertips.
        </p>
      </header>

      {/* Main Content */}
      <Suspense fallback={
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p className="loading-text">Discovering the world for you...</p>
        </div>
      }>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>

      {/* Footer */}
      <footer className="app-footer">
        <div className="app-footer__divider"></div>
        <p className="app-footer__text">
          🌍 Country on the Go — Built with React
        </p>
      </footer>
    </>
  );
}

export default App

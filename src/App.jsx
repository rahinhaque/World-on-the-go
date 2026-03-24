
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json());
  
function App() {
  

  return (
    <>
      <h1 className="header">Country on the go....</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App

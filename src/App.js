import './App.css';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import countries from './countries.json'
import { Routes, Route } from "react-router-dom";  // <== IMPORT
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [foundCountry, setFoundCountry] = useState([])

  useEffect(() => {


    // Get the project by id from the server
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setFoundCountry(response.data);
      })
    
  }, []);

  return (
    <div className="App">

    <Navbar />
    
    <Routes>


      <Route 
        path='/'
        element={<CountryList countries={foundCountry}/>}
      />

      <Route 
        path='/countries/:alpha3Code'
        element={<CountryDetails countries={foundCountry}/>}
      />

    </Routes>

    </div>
  );
}

export default App;

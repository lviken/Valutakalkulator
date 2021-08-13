import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://v6.exchangerate-api.com/v6/e3d0522704ab828b2ba21ea5/latest/USD'

function App() {

 
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)]) 

    })


  }, [] ) // tomt array sørger for at useEffect bare kalles den første gangen vi laster api

  return (

    <>
   <h1>Convert</h1>
   <CurrencyRow />
   <div className="equals">=</div>
   <CurrencyRow />
   </>
  );
}

export default App;

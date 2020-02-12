import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';

import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import SelectBox from './components/SelectBox';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  
  console.log(coinData);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
       setCoinData(res.data)
      })  
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="App">     
     <Navbar />
      <Route exact path = '/'>
        <div className = 'link-container'>
          <Link to = '/all-charts' className = 'view-all-button'><span>View All Charts</span></Link>
        </div>      
      </Route>
      <SelectBox coinData = {coinData} />
      <Route exact path = '/all-charts'>
        <Charts coinData={coinData} />
      </Route>    
      {/* <Route>
        <SelectedCharts />
      </Route> */}
    </div>
  );
};

export default App;
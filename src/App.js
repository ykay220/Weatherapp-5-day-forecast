import  { useState,useEffect } from 'react'
import Card from './components/Card';
import Currentcard from './components/Currentcard';
import { CircularProgress } from '@material-ui/core';

import axios from 'axios';
import './App.css';



function App() {
const [query, updateQuery] = useState("")
const [weather, updateWeather] = useState()
const [forecast, updateForecast] = useState()




const getApi = (cityString) => {


  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityString}&units=metric&appid=79f6200497f5af385065493b315b6ea2`).then((res) => {
    const currentData = res.data;
    
    updateQuery("")
    updateWeather(currentData)
    
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=79f6200497f5af385065493b315b6ea2`).then((res) => {
      const forecastData = res.data;

updateForecast(forecastData)

})
  })
    }



const search = (evt) => {
  if (evt.key === "Enter"){
 

    getApi(query);
   
  }else{
    <CircularProgress/>
  }
}


const queryHandler=(e)=>{
  // console.log(e.target.value)
  updateQuery(e.target.value)
  }
  



  return (
    <div className="main">
     <div className="banner">
       <div className="banner-text"><h1>GET THE DAILY FORECAST FOR 5 DAYS</h1></div>
       
        <div className="banner-inputdiv"><input className="search-input" onChange={queryHandler} value={query} onKeyPress={search} type="text" placeholder="Search for a city.."/></div>
     </div>

      <div className="predefined-container">
          <div className="button-predefinedcity" onClick={()=>getApi('Toronto')}>Toronto</div>
          <div className="button-predefinedcity" onClick={()=>getApi('New York')}>New York</div>
          <div className="button-predefinedcity" onClick={()=>getApi('London')}>London</div>
      </div>
    
    
     <div className="section">
      
    {(typeof weather != "undefined") ? (  <div className="current-weatherdiv">
      <Currentcard weather={weather}/>
      </div>) : null}
  
      {(typeof forecast != "undefined") ? (
        <div className="cards-container">
          {forecast.daily.slice(0,5).map((eachday, idx) => (
              <Card key={idx} forecast={forecast} weather={weather} eachday={eachday} />
                  ))}
        </div>
     
      ) : null}
        </div>
            <div className="footer-copyright">Yama Karimi</div>
    </div>

  );
}

export default App;

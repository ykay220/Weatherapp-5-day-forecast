import  { useState,useEffect } from 'react'
import Card from './components/Card';

import axios from 'axios';
import './App.css';



function App() {
const [query, updateQuery] = useState("")
const [weather, updateWeather] = useState()
const [forecast, updateForecast] = useState()








const search = (evt) => {
  if (evt.key === "Enter"){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=79f6200497f5af385065493b315b6ea2`).then((res) => {
      const currentData = res.data;
      
      updateQuery("")
      updateWeather(currentData)
      
      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=79f6200497f5af385065493b315b6ea2`).then((res) => {
        const forecastData = res.data;
 
  updateForecast(forecastData)

  


  
})

    })
   
  }
}



// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const queryHandler=(e)=>{
  // console.log(e.target.value)
  updateQuery(e.target.value)
  }
  



  return (
    <div className="main">

     <div className="banner">
       <div className="banner-text"><h1>5-DAY FORECAST</h1></div>
        <div className="banner-inputdiv"><input className="search-input" onChange={queryHandler} value={query} onKeyPress={search} type="text" placeholder="Search for a city.."/></div>
     </div>
     <div className="section">
      
    {(typeof weather != "undefined") ? (  <div className="city-header">
      <h1>{weather.name}, {weather.sys.country}</h1>
      </div>) : ("")}
  
      {(typeof forecast != "undefined") ? (
        <div className="cards-container">
          
           {forecast.daily.slice(0,5).map((eachday, idx) => (
              <Card key={idx} forecast={forecast} weather={weather} eachday={eachday} />
                  ))}
        </div>
     
      ) : ("")}
        </div>
    
    </div>

  );
}

export default App;

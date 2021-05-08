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
    <div className="App">
      <input onChange={queryHandler} value={query} onKeyPress={search} type="text"/>
      {(typeof forecast != "undefined") ? (
        <div className="cards-container">
           {forecast.daily.map((eachday, idx) => (
  <Card key={idx} weather={weather} eachday={eachday} />
))}
        </div>
     
      ) : ("")}
        
    
    </div>

  );
}

export default App;

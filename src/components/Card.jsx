import React from 'react'

function Card(props) {
   const { eachday } = props;
   const { weather } = props;
   const { forecast } = props;
//    console.log("each day forecast data is ", eachday)
//    console.log("current weather data is", weather)

const forecastweekday=()=>{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[new Date(eachday.dt * 1000).getDay()]
    return day
}
    

  

    const icon = eachday.weather[0].icon



    const weatherBackground=()=>{
        if(weather != "undefined" & forecast != "undefined"){
            let updatedWeatherclass = "";
            switch (eachday.weather[0].main) {
                case 'Clouds':
                 updatedWeatherclass="background-infocloud"
                    break;
                case 'Clear':
                 updatedWeatherclass="background-infoclear"
                    break;
                case 'Rain':
                 updatedWeatherclass="background-inforain"
                    break;
                default:
                 updatedWeatherclass="background-info"
            }
             return (
                <div className={updatedWeatherclass}>
                    <p>{forecastweekday()}</p>
                    <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
                    <div className="temp-description">
                    <p>{Math.round(eachday.temp.day)}°C</p>
                    <span>{eachday.weather[0].main}</span>
                    </div>
                    
            </div>)
        } 
    }

    return (
      
        <div className="card">
           {weatherBackground()}
            <div className="additional-info">
                <div className="additional-date">Details</div>
                <div className="additional-headers">
                    <div className="additional-title Wind">Wind</div>
                    <div className="additional-title Humidity">Humidity</div>
                    <div className="additional-title UVI">UVI</div>
                </div>
                <div className="additional-data">
                    <p>{eachday.wind_speed}m/s</p>
                    <p>{eachday.humidity}%</p>
                    <p>{eachday.uvi}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card

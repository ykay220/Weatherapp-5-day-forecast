import React from 'react'

function Card(props) {
   const { eachday } = props;
   const { weather } = props;
   console.log("each day forecast data is ", eachday)
   console.log("current weather data is", weather)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[new Date(eachday.dt * 1000).getDay()]
    const icon = eachday.weather[0].icon

    return (
      
        <div className="card">
            <div className="background-info">
                <p>{day}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
            </div>
            <div className="additional-info">
                <div className="additional-headers">
                    <div className="additional-title">Wind</div>
                    <div className="additional-title">Humidity</div>
                    <div className="additional-title">UVI</div>
                </div>
                <div className="additional-data">
                    <p>{eachday.wind_speed}</p>
                    <p>{eachday.humidity}</p>
                    <p>{eachday.uvi}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card

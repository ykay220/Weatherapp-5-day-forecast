import React from 'react'

function Card(props) {
   const { eachday } = props;
   const { weather } = props;
   console.log(eachday)
//    console.log(weather)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[new Date(eachday.dt * 1000).getDay()]
    const icon = eachday.weather[0].icon

    return (
        <div className="card">
            <h1>this card is {day} and the weather is {eachday.weather[0].icon}</h1>
            <p><img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" /></p>
        </div>
    )
}

export default Card



function Currentcard(props) {
    const {weather} = props;
    console.log(weather)

    const icon = weather.weather[0].icon

    
    const weatherDate = ()=>{
        const unixTime = weather.dt;
        const date = new Date(unixTime*1000);
        const currentdate = date.toLocaleDateString("en-US");
        return currentdate
    }

    const capitalize =(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return (
        <>
             <div className ="left-weatherdata">
                 <div className="left-weatherdatatext">
                    <p>{weatherDate()}</p>
                    <p>Currently in {weather.name}, {weather.sys.country}</p>
                 </div>
                
                 </div>
             <div className ="middle-weatherdata"> 
             <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
             <p>{capitalize(weather.weather[0].description)}</p>
             </div>
             <div className ="right-weatherdata">
                 <h2>{Math.round(weather.main.temp)}°C</h2>
                 <p>Feels like {Math.round(weather.main.feels_like)}°</p>
             </div>
             
        </>
    )
}

export default Currentcard

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";




export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        
        city: "Goa",
        feelslike: 24.85,
        humidity: 91,
        temp: 23.34,
        tempMax: 23.34,
        tempMin: 23.34,
        weather: "light rain",
    });

    let updateInfo =  (newInfo ) => {
            setWeatherInfo(newInfo);
        }
        
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox   updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}  />
        </div>
    );
}
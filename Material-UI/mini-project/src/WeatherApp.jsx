import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
         city: "Delhi",
        feelslike : 24.84,
        temp :25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity: 47,
        weather : "clear-sky"
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
       <>
        <h2> Weather App by Adarsh ❤️</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
       </>
    )
}
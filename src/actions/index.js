import axios from "axios"

const API_KEY="4c9adcda7b51f02eaac68d1f30bcde76"
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER="FETCH_WEATHER"


export const fetchWeather=city=>{
    const url=`https://cors-anywhere.herokuapp.com/${ROOT_URL}&q=${city},us`
    const request=axios.get(url)
    return {
     type:FETCH_WEATHER,
     payload:request
    }
}
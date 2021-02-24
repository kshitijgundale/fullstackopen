import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const CountryWeather = ({country}) => {

    const [ weatherData, setWeatherData ] = useState(null)

    const isMounted = useRef(true)
    console.log("Intialize : " + isMounted.current)
    // useEffect(() => {
        
    // }, [])

    useEffect(()=>{
        axios
            .get('http://api.weatherstack.com/current', {params : {
                access_key : process.env.REACT_APP_API_KEY,
                query : country.name
            }})
            .then((response)=>{
                console.log("Just Before Update : " + isMounted.current)
                if(isMounted.current){setWeatherData(response.data.current)}
            })
            return () => {
                isMounted.current = false;
                console.log("After Cleanup : " + isMounted.current)
            }
    }, [country.name])

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            {
                weatherData?
                <>
                    <p>Temperature: {weatherData.temperature}</p>
                    <img src={weatherData.weather_icons[0]} alt={`Weather in ${country.capital}`} />
                    <p>Wind: {weatherData.wind_speed} mph  direction {weatherData.wind_dir}</p>
                </>
                :
                <p>Fetching Weather Data</p>
            }
        </div>
    )
}

export default CountryWeather
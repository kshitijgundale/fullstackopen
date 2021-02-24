import React from 'react'
import CountryWeather from './CountryWeather'

const CountryView = ({country})=>{
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <ul>
                {
                    country.languages.map((lang)=>
                        <li key={lang.iso639_1}>{lang.name}</li>
                    )
                }
            </ul>
            <img src={country.flag} alt={`Flag of ${country.name}`} height={100} width={200}/>
            <CountryWeather country={country}/>
        </div>
    )
}

export default CountryView
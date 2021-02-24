import React from 'react';
import CountryView from './CountryView'

const Countries = ({searchName, countries, setSearchName}) => {

    const countryViewClick = (country) => {
        setSearchName(country.name)
    }

    if(countries.length === 1){
        return (
            <div>
                {
                    countries.map((country)=>{
                        return (
                            <CountryView country={country} key={country.alpha3Code}/>
                        )
                    })
                }
            </div>
        )
    }
    else if(countries.length<=10 && countries.length>0){
        return (
            <ul>
                {
                    countries.map((country)=>{
                        return(
                            <div key={country.alpha3Code}>
                                <li>{country.name}</li>
                                <button onClick={()=>countryViewClick(country)}>View</button>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
    else{
        return(
            searchName && countries.length>0?
            <h3>Too many matches, add another filter</h3>
            :
            searchName && countries.length===0?
            <h3>No countries Found</h3>
            :
            <h3>Search by name</h3>
        )
    }
}

export default Countries
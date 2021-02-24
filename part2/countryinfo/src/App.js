import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchName, setSearchName ] = useState('')

  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response)=>{
        setCountries(response.data)
      })
  }, [])

  let arr = countries.filter((country)=>country.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      Find countries <input onChange={(event)=>{setSearchName(event.target.value)}} value={searchName}/>
      <Countries searchName={searchName} countries={arr} setSearchName={setSearchName}/>
    </div>
  )
}

export default App;

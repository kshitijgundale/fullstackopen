import React from 'react'

const Filter = ({searchName, setSearchName}) => {
    return (
        <div>
            Search by Name: <input onChange={(event)=>setSearchName(event.target.value)} value={searchName}/>
        </div>
    )
} 

export default Filter
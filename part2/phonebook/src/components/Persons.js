import React from 'react'
import Person from './Person'


const Persons = ({persons, searchName, deletePerson}) => {
    let arr = persons.filter((person)=>person.name.toLowerCase().includes(searchName.toLowerCase()))
    return (
      arr.map((person)=>
        <Person person={person} key={person.name} deletePerson={deletePerson}/>
      )
    )
}

export default Persons
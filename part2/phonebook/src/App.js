import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    personService
      .getAll()
      .then(intialPersons => {
        setPersons(intialPersons)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    let newPerson = {name: newName, number: newNumber}
    if(persons.some((person)=>person.name === newName)){
      if(window.confirm(`${newName} already exists, replace old number with new one?`)){
        const person = persons.find(p => p.name === newName)
        const updatedPerson = {...person, number: newNumber}
        personService
          .update(person.id, updatedPerson)
          .then((returnedPerson)=>{
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage({text:`${person.name} has been updated`, type:'error'})
            setTimeout(() => {
              setMessage(null)
            }, 3000);
          })
          .catch(error=>{
            setPersons(persons.filter(p=>p.id !== person.id))
            setMessage({text:`${person.name} has already been deleted`, type:'error'})
            setTimeout(() => {
              setMessage(null)
            }, 3000);
          })
      }
    }
    else{
      personService
        .add(newPerson)
        .then((newPerson)=>{
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setMessage({text:`Added ${newPerson.name}`, type:'success'})
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }
  }

  const deletePerson = (id, name) => {
    if(window.confirm(`Delete ${name}`)){
      personService
        .remove(id)
        .then(()=>{
          setPersons(persons.filter(person => person.id !== id))
          setMessage({text:`Deleted ${name}`, type:'success'})
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
        .catch(error=>{
          setPersons(persons.filter(p=>p.id !== id))
          setMessage({text:`${name} has already been deleted`, type:'error'})
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }
  }

  console.log(message===null)

  return (
    <div>
      <h2>Phonebook</h2>
      {
        message?
        <Notification text={message.text} type={message.type} />
        :
        <></>
      }
      <h2>Search</h2>
      <Filter searchName={searchName} setSearchName={setSearchName}/>
      <h2>Add a Number</h2>
      <NewPerson newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} deletePerson={deletePerson}/>
    </div>
  )
}

export default App

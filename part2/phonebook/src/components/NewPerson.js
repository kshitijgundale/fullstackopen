import React from 'react'

const NewPerson = ({addPerson, setNewName, setNewNumber ,newName, newNumber}) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input onChange={(event)=>setNewName(event.target.value)} value={newName}/>
          number: <input onChange={(event)=>setNewNumber(event.target.value)} value={newNumber}/>
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default NewPerson
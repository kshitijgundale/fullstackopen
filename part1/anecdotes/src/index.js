import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handler}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(new Uint8Array(anecdotes.length))
  
  let mostVotesIndex = scores.indexOf(Math.max(...scores))
  
  return (
    <div>
      <h1>Anecdotes of the Day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {scores[selected]} votes</div>
      <Button text="next anecdote" handler={()=>setSelected(Math.floor(Math.random()*anecdotes.length))}/>
      <Button text="vote" handler={()=>{
        let copy = [...scores]
        copy[selected] += 1
        setScores(copy)
      }}/>
      <div>
        <h1>Anecdotes with Most Votes</h1>
        <p>{anecdotes[mostVotesIndex]}</p>
        <p>has {scores[mostVotesIndex]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

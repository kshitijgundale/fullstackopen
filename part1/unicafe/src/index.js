import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handler}) => {
  return (
    <button onClick={handler}>
      {name}
    </button>
  )
}

const Statistics = ({text, values})=>{
  return (
    <tr>
      <td>{text}</td>
      <td>{values}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sum = good + bad + neutral

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name="Good" handler={()=>setGood(good + 1)}/>
      <Button name="Neutral" handler={()=>setNeutral(neutral + 1)}/>
      <Button name="Bad" handler={()=>setBad(bad + 1)}/>
      {
        sum?
        <table>
          <tbody>
            <Statistics text="good" values={good}/>
            <Statistics text="bad" values={bad}/>
            <Statistics text="neutral" values={neutral}/>
            <Statistics text="average" values={(good - bad)/(good + bad + neutral)}/>
            <Statistics text="positive" values={good/(good + bad + neutral)}/>
          </tbody>
        </table>
        :
        <p>No Feedback given</p>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.num}
    </p>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.info
  return (
    <div>
      <Part name={part1.name} num={part1.exercises}/>
      <Part name={part2.name} num={part2.exercises}/>
      <Part name={part3.name} num={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.exercises
  return (
    <p>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header name={course.name}/>
      <Content info={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
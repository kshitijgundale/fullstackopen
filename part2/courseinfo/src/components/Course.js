import React from 'react';

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((total, currentValue)=>total + currentValue.exercises, 0)
    console.log(total)
    return(
      <p>Number of exercises {total}</p>
    ) 
  }
  
  const Part = ({name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {
          parts.map(({name, exercises, id})=>
          <Part name={name} exercises={exercises} key={id}/>)
        }
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

  export default Course
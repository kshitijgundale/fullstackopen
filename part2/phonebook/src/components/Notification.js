import React from 'react'

const Notification = ({ text, type }) => {
    const style =  {
        color: '',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(type==='error'){
        style['color'] = 'red'
    }
    else{
        style['color'] = 'green'
    }

    if (text === null) {
      return null
    }
  
    return (
      <div style={style}>
        {text}
      </div>
    )
  }

export default Notification
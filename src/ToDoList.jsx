import React from 'react'
import {TiDelete} from 'react-icons/ti'

const ToDoList = (props) => {
    
  return (
      <>
      <div className='todo_style'>
        <TiDelete className='cross_icon' onClick={()=>{
            props.onSelect(props.id);
        }}/>
        <li>{props.text}</li>
      </div>
      </>
  )
}

export default ToDoList
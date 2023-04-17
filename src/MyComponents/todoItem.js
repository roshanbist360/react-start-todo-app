import React from 'react'

export default function TodoItem(props) {
  const todoItemStyle = {
     background: "#ddd",
     margin: "40px 0px",
     padding: "20px",
     width: "220px"
  }

  return (
    <div className='todoItem' style={todoItemStyle}>
       <h5>Sno: {props.todo.Sno}</h5>
       <h5>Name: {props.todo.Name}</h5>
       <h5>Roll: {props.todo.Roll}</h5>
       <h5>Course: {props.todo.Course}</h5>
       <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}

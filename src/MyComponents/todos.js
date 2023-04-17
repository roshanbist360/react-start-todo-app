import React from 'react'
import TodoItem from './todoItem'

export default function Todos(props) {
  return (
    <div>
      {props.todos.length===0? "****** No todos to display *******":   
       props.todos.map((todo)=>{
         return(
          <TodoItem todo={todo} key={todo.Roll} onDelete={props.onDelete}/>
         )      
       })}       
    </div>
  )
}

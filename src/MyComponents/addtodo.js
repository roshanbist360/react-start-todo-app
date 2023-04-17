import React, { useState } from 'react'

export default function AddTodo(props) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");

  const submit=(e)=>{
      e.preventDefault();
      if(!name || !roll || !course){
        alert("Name, Roll and Course can not be empty.")
      }
      else{
        // calling add todo function 
        props.addTodo(name,roll,course);

        // making input fields empty after adding todo
        setName("");
        setRoll("");
        setCourse("");
      }
  }

  return (
    <div>
        <h3>Add Todo</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="Name">Name &ensp; </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="htmlform-control"/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="Roll">Roll &ensp; &ensp; </label>
            <input type="number"  value={roll} onChange={(e)=>{setRoll(e.target.value)}} className="htmlform-control"/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="Course">Course &ensp; </label>
            <input type="text"  value={course} onChange={(e)=>{setCourse(e.target.value)}} className="htmlform-control"/>
          </div>
          <br/>       
         <button type="submit" className="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

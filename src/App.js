// import logo from './logo.svg';
import './App.css';
import './MyComponents/todoItem.css';
import Header from './MyComponents/header';
import AddTodo from './MyComponents/addtodo'
import Todos from './MyComponents/todos';
import Home from './MyComponents/home';
import About from './MyComponents/about';
import Error from './MyComponents/error';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App() {
  //if todos are not null set initTodo as empty else get todo list from local storage
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //deleting todos
  let onDelete = (todo) => {
     setTodos(todos.filter((e)=>{
         return e!==todo;
     }))
    }
  
  //maintaining sno and adding todos
  const addTodo = (name, roll, course) => {
      let sno;
      if(todos.length==0){
        sno=1;
      }
      else{
        sno = todos[todos.length-1].Sno+1;
      }
     
      const myTodo = {
            Sno: sno,
            Name: name,
            Roll: roll,
            Course: course
      }
      setTodos([...todos, myTodo]);
    }

      //saving todos to local storage using use effect snipset 
      //todo array or list
     const [todos, setTodos] = useState(initTodo);
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)); 
      }, [todos])        
  

  //todo array or list
//   const [todos, setTodos] = useState([
//     {
//       Sno: 1,
//       Name: "Roshan",
//       Roll: 20,
//       Course: "Computer Science"
//     },
//     {
//       Sno: 2,
//       Name: "Dinesh",
//       Roll: 22,
//       Course: "Science"
//     },
//     {
//       Sno: 3,
//       Name: "Ramu",
//       Roll: 10,
//       Course: "Computer"
//     }
// ])
  
  return (
    <>
      <Main>       

         <div style={{textAlign: "center"}}>
             <Header/>
         </div>
          
         <Routes>
             {/* element= specifies what we are going to display on this path or page */}
            <Route exact path='/' element={         
            <>
             <Home/>
              <div className='todoContainer mt-5'>
                 <h3 className='mt-5'>My TODO App</h3>
              </div>              
              <div className='todoContainer mt-5'>
                <AddTodo addTodo={addTodo}/>
              </div>
              <div className='todoContainer'>
                <Todos todos={todos} onDelete={onDelete}/>
              </div>
            </>
            } />

            <Route exact path='/about' element={<About/>} />
            <Route path='/*' element={<Error/>} />

         </Routes>
      </Main>
    </>
  );
}

export default App;

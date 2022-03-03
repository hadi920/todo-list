import React, { useState } from 'react'
import './App.css';
import ToDoList from './ToDoList';



function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
      setInputList(event.target.value);
  }

  const listOfItems = ()=>{
      setItems((oldItems) => {
        return[...oldItems, inputList];
      });
      setInputList('')
  }

  const deleteItem = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })

  }
  return (
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" value={inputList} placeholder='Add a Item' onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol>
          {
            Items.map( (val,index)=>{
              return(
                <ToDoList key={index} id={index} text={val} onSelect={deleteItem}/>
              )
            })
          }
        </ol>
      </div>
      
    </div>
  );
}

export default App;

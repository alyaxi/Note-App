import React,{ useState } from 'react';
import './App.css';
import Header from "./Components/Header"
import Footer from './Components/Footer';
import CreateNote from "./Components/CreateNote"
import Note from './Components/Note';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [addItem, setAddItem] = useState([])
  const addNote = (currentNote) => {
        setAddItem((olddata) => {
          return [...olddata,currentNote]
        })
  }
  const deleteBtn = (id) => {
    setAddItem((olddata123)=>
      olddata123.filter((currentData, index)=>{
        return index !== id
      })
    )
  }
  return (
    <div>
     <Header/>
     <CreateNote noteProp={addNote}/>
     {addItem.map((value, index) => {
       return<Note
       key={index}
       id={index}
       title={value.title}
       content={value.content}
       button={deleteBtn} 
       />
     })}
     <Footer/>
    </div>
  );
}

export default App;

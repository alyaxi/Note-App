import React, { useState } from 'react'
import "./CreateNote.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function CreateNote(props) {
    const [currentNote, setCurrentNote]  = useState({
        title:"",
        content:""
    })
    const inputData = (e) => {
        const {value, name} = e.target
        setCurrentNote((data) =>{
            return{
                ...data,
                [name] : value

            }
            
            
        })
    }
    const addEvent = () => {
        props.noteProp(currentNote)
        setCurrentNote({
            title:"",
            content:""
        })
    }
    
    return (
        <div className="main-div">
            <section className="form-gradient mb-5">
        
        <div className="card">
      
          <div className="header peach-gradient">
      
            <div className="row d-flex justify-content-center">
              <h3 className="white-text mb-0 py-5 font-weight-bold">Enter Your Note</h3>
            </div>
      
          </div>
      
          <div className="card-body mx-4">
      
            <div className="md-form">
              <i className="fas fa-user prefix grey-text"></i>
              <input
              type="text"
              name="title" 
              value={currentNote.title} 
              onChange={inputData} 
              placeholder="Title"
              autoComplete="off"
              id="form104" 
              className="form-control"/>
              <label for="form104">Your Title</label>
            </div>
      
            <div className="md-form">
              <i className="fas fa-pencil-alt prefix grey-text"></i>
              <textarea
              name="content" 
              value={currentNote.content}
              onChange={inputData} 
              placeholder="Enter your note" 
              autoComplete="off" 
              id="form107" 
              className="md-textarea form-control" 
              rows="5"/>
              <label for="form107">Your Note</label>
            </div>
      
            <div className="row d-flex align-items-center mb-3 mt-4">

              <div className="col-md-12">
                <div className="text-center">
                  <Button id="btn" onClick={addEvent} className="btn btn-grey btn-rounded z-depth-1a">
                  <AddIcon/>
              </Button>
                </div>
              </div>

      
            </div>
          </div>
      
        </div>
      
      </section>    
        </div>
        
    )
}

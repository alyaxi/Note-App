import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import Button from 'react-bootstrap/Button'
import "./Note.css";

export default function Cards(props) {
    return (
      <div className="main-card">
      <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="img"/>
                    <h3>{props.titlename}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="para">{props.contentarea}</p>
                    <p>{props.date}</p>
                    <Button 
        onClick={props.buttondelete}
         className="btn-circle" variant="light">
          <DeleteIcon id="btn-icon" />
        </Button>
                        
                </div>
            </div>
        </div>
        </div>
        </div>
      
        
    )
}

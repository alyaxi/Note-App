import React from "react";
import "./Note.css";
import Cards from "./Cards";

export default function Note(props) {
  // const [deleteNote, setDeleteNote] = useState()
  const date = new Date();
  const fulldate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const DeleteEvent = () => {
    props.button(props.id);
  };
  return (
          <Cards
            date={fulldate}
            titlename={props.title}
            contentarea={props.content}
            buttondelete={DeleteEvent}
          />
    
  );
}

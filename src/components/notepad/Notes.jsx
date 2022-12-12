import { React, useState, useEffect } from "react";
import "../css/Notepad.css";
import Note from "./Notepad";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";

const Notes = () => {
  //states
  const savedNotes = localStorage.getItem('notes');
  const [notes, setNotes] = useState(savedNotes ? JSON.parse(savedNotes) : []);
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
    ))}
      <CreateNote 
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>  
)
}

export default Notes;
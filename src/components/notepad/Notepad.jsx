import React from 'react';
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import Checkbox from "@mui/material/Checkbox";

function Notepad({ id, text, checked, handleClick, deleteNote }) {
    return (
    <div className="note">
        <div className="note__body">{text}</div>
        <div className="note__footer" style={{ justifyContent: "inherit" }}>
            <Checkbox 
            // checked={checked}
            // onChange={handleClick}
            />
            <DeleteForeverOutlined
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
            ></DeleteForeverOutlined>
        </div>
    </div>  
    )
}

export default Notepad;
import React from 'react';
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";

function Note({ id, text, deleteNote }) {
    return (
    <div className="note">
        <div className="note__body">{text}</div>
        <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <DeleteForeverOutlined
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
            ></DeleteForeverOutlined>
        </div>
    </div>  
    )
}

export default Note;
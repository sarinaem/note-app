import { useState } from "react";

function AddNewNote({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescripton] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !description) return null;

        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
          
        };
        onAddNote(newNote);
        setTitle("");
        setDescripton(""); //for reset after click button
    };

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     setTitle(e.target.value); //show text in input
    // }
  return (
    <div className='add-new-note'>
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => {
        setTitle(e.target.value); //show text in input
    }} className="text-field" 
    placeholder="note title"/>
            <input type="text" 
            value={description}
             onChange={(e) => {
            setDescripton(e.target.value)
            }}
             className="text-field" 
             placeholder="note description" />
            <button type="submit" 
            className="btn btn--primary">Add New Note</button>
        </form>
    </div>
  )
}

export default AddNewNote;


import { useState } from 'react';
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
function App() {
const [notes, setNotes] = useState([]);
//هر جا استیت بود& همونجا آپدیت شه
const handleNotes = (newNote) => {
  setNotes((prevNotes) => [...prevNotes, newNote]);

} 

const handleDeleteNote = (id) => {
  //way1
  // const filterdNotes = notes.filter((note) => note.id !== id);
  // setNotes(filterdNotes); //filter not muted state
  //way2 
  setNotes(prevNotes => prevNotes.filter((n) => n.id !== id));

};

const handleComplete = (e) => {
 console.log(e.target.value); //not run for me
 const noteId = Number(e.target.value);
 const newNotes = notes.map((note) => {
  
  note.id === noteId ? {...note, completed: !note.completed } : note });

  // setNotes(newNotes);

};


//for udate
return (
<div className='container'>
    <div className="note-header">
    note-header
    </div>
    <div className='note-app'>
     <AddNewNote onAddNote={handleNotes} />
     {/* <AddNewNote setNotes={setNotes} />
 */}
      <div className='note-container'>
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} onComplete={handleComplete}/>
        </div>
    </div>
  </div>
);
      }

   
    
export default App



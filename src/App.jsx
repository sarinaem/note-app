import { useState } from 'react';
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';

function App() {
const [notes, setNotes] = useState([]);
const [sortBy , setSortBy] = useState("latest");

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
//  console.log(e.target.value);
 const noteId = Number(e.target.value);
//  const newNotes = notes.map((note) => {
  // return note.id === noteId ? {...note, completed: !note.completed } : note });
  // console.log(newNotes);
// زمانی که استیت مقدارش به قبلی وابسته باشه بهتره کالبک استفاده کنیم

// setNotes(newNotes);

setNotes((prevNotes) => prevNotes.map((note) => {
  return note.id === noteId ? {...note, completed: !note.completed } : note }))

};

//مرتب کردن دیتا note list
//asending a-b
//sort muted so we write [...notes] clon or  slice, copy from note shallow copy
//goal: compare datea => so write new Date

//for udate
return (
<div className='container'>
    <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => { setSortBy(e.target.value) }}/>
    <div className='note-app'>
     <AddNewNote onAddNote={handleNotes} />
     {/* <AddNewNote setNotes={setNotes} />
 */}
      <div className='note-container'>
      < NoteStatus notes={notes}/>

      <NoteList notes={notes} sortBy={sortBy} onDeleteNote={handleDeleteNote} onComplete={handleComplete}/>
        </div>
    </div>
  </div>
);
      }

   
    
export default App



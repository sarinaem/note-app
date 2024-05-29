
function NoteList({notes, onDeleteNote, onComplete}) {
  console.log(notes);

  return (
    <div className="note-list">
      {
        notes.map((note) => ( 
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onComplete={onComplete}/>
      )) }
    </div>
)
}


export default NoteList;

function NoteItem({note , onDeleteNote, onComplete}) {
  const options = {
    year:"numeric",
    month:"long",
    day:"numeric",

  }
  return <div className="note-item">
    <div className="note-item__header">
      <div>
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="actions">
        <button onClick={() => onDeleteNote(note.id)}>❌</button>
        <input type="checkbox" name={note.id} id={note.id} value={note.id} onChange={onComplete} />
      </div>
    </div>
    <div className="note-item__footer">
      {new Date(note.createdAt).toLocaleDateString("en-Us", options)}
    </div>
  </div>
}
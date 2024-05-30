import Toast from "./Toast";

function NoteStatus({ notes }) {
    const allNotes = notes.length;
    const complateNotes = notes.filter((n) => n.completed).length;
    const openNotes = allNotes - complateNotes;
    
    if(!allNotes) return (<Toast text="No Notes has already been added" icon="⭕">This is children</Toast>
    // if(!allNotes) return (<Toast text="text" icon=""/>
    )
  return (
    <ul className="note-status">
            <li className="">
            All <span>{allNotes}</span>
            </li>
            <li>
            Complate <span>{complateNotes}</span>
            </li>
            <li>
            open <span>{openNotes}</span>
            </li>
          
    </ul>
  )
}



export default NoteStatus;
import Message from "./Message";

function NoteStatus({ notes }) {
    //drived state یا دیتای مشتق‌شده
    const allNotes = notes.length;
    const complateNotes = notes.filter((n) => n.completed).length;
    // چون آرایه است طولش رو میگیریم
    const openNotes = allNotes - complateNotes;
    
    if(!allNotes) return (<Message text="No Note has already been added"/>
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
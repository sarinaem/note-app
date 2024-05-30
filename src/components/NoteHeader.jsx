
function NoteHeader({notes, sortBy , onSort}) {


  return (
    <div className="note-header">
        <h1>My Note({notes.length})</h1>
        <select value={sortBy} onChange={onSort}>
            <option value="latest">sort based on latest sort</option>
            <option value="earliest">sort based on earliest sort</option>
            <option value="completed">sort based on completed sort</option>

        </select>
    </div>
  )
}


export default NoteHeader;




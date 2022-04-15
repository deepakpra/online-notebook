import React, { useEffect } from 'react'
import { useContext } from 'react'
import Note from './Note'
import NoteContext from './notes/NoteContext'
const Notes = () => {
  const { notes, loadNotes } = useContext(NoteContext)
  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <div className='row'>
      <h2 className='my-3'>Your Notes</h2>
      {notes.map((note) => {
        return <Note note={note} key={note._id} />
      })}
    </div>
  )
}

export default Notes

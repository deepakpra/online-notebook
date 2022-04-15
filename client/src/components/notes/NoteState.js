import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {
  const init = [
    {
      _id: '6251e1ffa34ad1e48a2294f4',
      user: '624dd13302a75b18c78f1268',
      title: 'my titel update 2',
      content: 'this is content update',
      createdAt: '2022-04-09T19:43:59.130Z',
      updatedAt: '2022-04-09T20:18:30.207Z',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(init)

  const loadNotes = async () => {
    const res = await fetch('http://localhost:5000/api/getnotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGRkMTMzMDJhNzViMThjNzhmMTI2OCIsImlhdCI6MTY0OTQyMTcyNX0.jkSa68GtN_ex4qEndsMoYouX3fW8BuKyGzBL-r9J4z4',
      },
    })
    const data = await res.json()
    console.log(data)
    setNotes(data)
  }

  const addNote = async ({ title, content, tags = '' }) => {
    const res = await fetch('http://localhost:5000/api/addnotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGRkMTMzMDJhNzViMThjNzhmMTI2OCIsImlhdCI6MTY0OTQyMTcyNX0.jkSa68GtN_ex4qEndsMoYouX3fW8BuKyGzBL-r9J4z4',
      },
      body: JSON.stringify({ title, content }),
    })
    const newNote = await res.json()
    console.log(newNote)
    setNotes((prevNotes) => {
      return [...prevNotes, { ...newNote }]
    })
  }

  const deleteNote = async (id) => {
    const newNote = notes.filter((note) => note._id !== id)
    setNotes(newNote)
    const res = await fetch(`http://localhost:5000/api/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGRkMTMzMDJhNzViMThjNzhmMTI2OCIsImlhdCI6MTY0OTQyMTcyNX0.jkSa68GtN_ex4qEndsMoYouX3fW8BuKyGzBL-r9J4z4',
      },
    })
    await res.json()
  }
  const updateNotes = async () => {}
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, loadNotes, updateNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState

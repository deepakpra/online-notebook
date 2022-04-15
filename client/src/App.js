import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './components/notes/NoteState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className='container my-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  )
}

export default App

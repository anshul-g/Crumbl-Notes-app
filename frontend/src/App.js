import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../src/components/Login.js';
import NavBar from '../src/components/NavBar.js';
import AddNoteButton from '../src/components/AddNoteButton.js';
import NotesList from './components/NotesList.js';

import '../src/styles/App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const url = 'http://localhost:8000/api';

  const getNotesList = async () => {
    try {
      const resp = await axios.get(`${url}/notes-list`);
      console.log(resp.data);
      setNotes(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotesList();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" />
          <Route
            path="/"
            element={
              <>
                <NotesList notes={notes} fetchData={getNotesList} />
                <AddNoteButton fetchData={getNotesList} />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../src/components/Login.js';
import NavBar from '../src/components/NavBar.js';
import AddNoteButton from '../src/components/AddNoteButton.js';
import NotesList from './components/NotesList.js';

import '../src/styles/App.css';
import { AuthProvider } from './utils/AuthContext.js';

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
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <NotesList notes={notes} fetchData={getNotesList} />
                <AddNoteButton fetchData={getNotesList} />
              </>
            }
          />
          
        </Routes>
      </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

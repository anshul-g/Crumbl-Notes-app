import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar.js';
import NotesList from '../components/NotesList.js';
import AddNoteButton from '../components/AddNoteButton.js';
import AuthContext from '../utils/AuthContext.js';

function MainContent(){
  const [notes, setNotes] = useState([]);
  const { user, authTokens } = useContext(AuthContext);
  const url = 'http://localhost:8000/api';

  const getNotesList = async () => {
    try {
      const config = { headers: {'Authorization' : 'Bearer ' + JSON.parse(authTokens.access)}};
      const resp = await axios.get(`${url}/notes-list`, config);
      console.log(resp.data);
      setNotes(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotesList();
  }, []);

  return(
    <>
    {user ? (<>
      <NavBar />
      <NotesList notes={notes} fetchData={getNotesList} />
      <AddNoteButton fetchData={getNotesList} />
    </>) : <Navigate to="/login"></Navigate>
  }</>
  )
}

export default MainContent;
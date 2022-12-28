import {useState, useEffect} from 'react';
import axios from 'axios';
import Note from '../components/Note.js';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridTemplateRows: 'masonry',
  gap: '1rem',
  padding: '2rem'
}

function NotesList() {
  const [notes, setNotes] = useState([]);
  const url='http://localhost:8000/api';

  const getNotesList = async() => {
    try{
      const resp = await axios.get(`${url}/notes-list`);
      console.log(resp.data);
      setNotes(resp.data);
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getNotesList();
  }, [])

  return(
    <div style={style}>
      {notes.map((note) => 
        <Note key={note.id} id={note.id} title={note.title} content={note.content} />
      )}
    </div>
  )
}

export default NotesList;
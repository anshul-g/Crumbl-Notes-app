import {useState, useEffect} from 'react';
import axios from 'axios';
import Note from '../components/Note.js';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridTemplateRows: 'masonry',
  gap: '1rem',
  padding: '2rem',
}

function NotesList(props) {

  return(
    <div style={style}>
      {props.notes.map((note) => 
        <Note key={note.id} id={note.id} title={note.title} content={note.content} />
      )}
    </div>
  )
}

export default NotesList;
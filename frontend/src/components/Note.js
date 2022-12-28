import { useState } from 'react';
import AddNoteModal from '../components/AddNoteModal.js';

function Note(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={{border: '1px solid white', borderRadius: '4px', padding: '1rem'}} onClick={handleClick}>
      {/* <AddNoteModal open={open} title={"Title"} content={"Content"} /> */}
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;

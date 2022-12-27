import { useState } from 'react';
import AddNoteModal from '../components/AddNoteModal.js';

const style = {
  position: 'absolute',
  bottom: '3rem',
  right: '3rem',
  background: 'purple',
  borderRadius: '8px',
  padding: '1rem',
  border: 'none',
  cursor: 'pointer'
}

function AddNoteButton() {
  const [open, setOpen] = useState(false);

  const handleAddBtn = () => setOpen(!open);
  const handleCloseBtn = () => setOpen(!open);

  return (
    <>
      <AddNoteModal open={open} handleCloseBtn={handleCloseBtn} />
      <div className='AddBtnContainer'>
        <button
          style={style}
          onClick={handleAddBtn}
        >
          Add a note
        </button>
      </div>
    </>
  );
}

export default AddNoteButton;

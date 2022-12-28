import { useState } from 'react';
import AddNoteModal from '../components/AddNoteModal.js';

const style = {
  position: 'absolute',
  bottom: '3rem',
  right: '3rem',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1.2rem'
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
          className={'primaryBtn'}
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

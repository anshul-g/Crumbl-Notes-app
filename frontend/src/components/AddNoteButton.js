import { useState } from 'react';
import AddNoteModal from '../components/AddNoteModal.js';

const style = {
  position: 'fixed',
  bottom: '3rem',
  right: '3rem',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1.2rem',
};

function AddNoteButton(props) {
  const [open, setOpen] = useState(false);

  const handleAddBtn = () => setOpen(!open);
  const handleCloseBtn = async () => {
    await props.fetchData();
    setOpen(!open);
  };

  return (
    <>
      <AddNoteModal open={open} handleClose={handleCloseBtn} />
      <button className={'primaryBtn'} style={style} onClick={handleAddBtn}>
        Add a note
      </button>
    </>
  );
}

export default AddNoteButton;

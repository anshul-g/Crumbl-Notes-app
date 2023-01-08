import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import AddNoteModal from '../components/AddNoteModal.js';

const style = {
  position: 'fixed',
  bottom: '3rem',
  right: '3rem',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1.3rem'
};

function AddNoteButton(props) {
  const [open, setOpen] = useState(false);
  const handleAddBtn = () => setOpen(!open);

  // handles modal close button 
  // fetches data from api before closing so that 
  // any change is reflected without refreshing the page
  const handleCloseBtn = async () => {
    await props.fetchData();
    setOpen(!open);
  };

  return (
    <>
      <AddNoteModal open={open} handleClose={handleCloseBtn} />
      <button className={'primaryBtn'} style={style} onClick={handleAddBtn}>
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </>
  );
}

export default AddNoteButton;

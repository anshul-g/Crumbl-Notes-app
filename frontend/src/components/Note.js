import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import EditNoteModal from '../components/EditNoteModal.js';

function Note(props) {
  const [open, setOpen] = useState(false);

  // when user clicks the edit button
  // it opens up the modal for editing the note
  const handleEdit = () => {
    setOpen(!open);
  };

  // fetches data before closing the modal
  // so that if there is any change in the list, it reflects immediately
  const handleClose = async () => {
    await props.fetchData();
    setOpen(!open);
  };

  // function to handle the delete button click
  // deletes current note from api and then fetches data to refresh the list
  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/api/note-delete/${props.id}`);
    await props.fetchData();
    console.log('deleted!');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '4px',
        padding: '1rem',
      }}
    >
      {/* Modal for editing a note */}
      <EditNoteModal
        id={props.id}
        open={open}
        handleClose={handleClose}
        title={props.title}
        content={props.content}
      />

      <div
        style={{
          display: 'flex',
          marginBottom: '2rem',
        }}
      >
        <h1 style={{ fontSize: '1.2rem' }}>{props.title}</h1>
      </div>

      <p>{props.content}</p>

      {/* Edit and delete buttons */}
      <div
        style={{
          marginTop: '2rem',
          marginLeft: 'auto',
        }}
      >
        <button className={'primaryBtn'} onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className={'primaryBtn'} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Note;

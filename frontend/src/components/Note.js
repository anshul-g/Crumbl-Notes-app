import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import EditNoteModal from '../components/EditNoteModal.js';

function Note(props) {
  const [open, setOpen] = useState(false);
  // console.log(props);

  const handleEdit = () => {
    setOpen(!open);
  };

  const handleClose = async () => {
    await props.fetchData();
    setOpen(!open);
  };

  const handleDelete = async() => {
    await axios.delete(`http://localhost:8000/api/note-delete/${props.id}`);
    await props.fetchData();
    console.log("deleted!");
  }

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
          // justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <h1 style={{ fontSize: '1.2rem' }}>{props.title}</h1>
      </div>
      <p>{props.content}</p>
      <div 
          style={{
            marginTop: '2rem',
            marginLeft: 'auto',
        }}>
          <button
            className={'primaryBtn'}
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </button>
          <button
            className={'primaryBtn'}
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
    </div>
  );
}

export default Note;

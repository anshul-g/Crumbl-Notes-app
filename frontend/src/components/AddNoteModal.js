import { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import AuthContext from '../utils/AuthContext.js';
import '../styles/Button.css';


function AddNoteModal(props) {
  const [title, setTitle] = useState('Title');
  const [content, setContent] = useState('Write it down!');
  const { authTokens } = useContext(AuthContext);

  // style to customise modal
  const customStyles = {
    overlay: {
      background: 'rgb(255,255,255,0.05)',
    },

    content: {
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40vw',
      height: '65vh',
      background: '#202124',
      border: '1px solid white',
    },
  };

  // functions to handle and store user input
  const onTitleChange = (e) => setTitle(e.target.outerText);
  const onContentChange = (e) => setContent(e.target.outerText);

  // function to save the note
  const handleSave = async () => {
    try {
      const config = {headers: {'Authorization' : 'Bearer ' + String(JSON.parse(authTokens).access)}};
      const response = await axios.post(
        'http://localhost:8000/api/note-create',
        {
          title: title,
          content: content,
        }, 
        config
      );
      props.handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => {
      setTitle("Title");
      setContent("Write it down!");
    };
  }, [props.handleClose]);

  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.handleClose}
      style={customStyles}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '100%',
          padding: '0.75rem',
          paddingBottom: '0',
        }}
      >
        {/* contentEditable div for title */}
        <div
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid grey',
            borderRadius: '5px',
          }}
          contentEditable="true"
          aria-multiline="true"
          role="textbox"
          tabIndex="0"
          aria-label="Title"
          spellCheck="true"
          onInput={onTitleChange}
        >
          Title
        </div>

        {/* contentEditable div for content */}
        <div
          style={{
            flex: '1',
            padding: '1rem',
            border: '1px solid grey',
            borderRadius: '5px',
          }}
          contentEditable="true"
          aria-multiline="true"
          role="textbox"
          tabIndex="1"
          aria-label="Title"
          spellCheck="true"
          onInput={onContentChange}
        >
          Write it down!
        </div>
        <div style={{ paddingBottom: '0.75rem', marginLeft: 'auto' }}>
          <button className={'primaryBtn'} onClick={handleSave} hidden={(title && content) ? false : true}>
            Save
          </button>
          <button className={'primaryBtn'} onClick={props.handleClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddNoteModal;

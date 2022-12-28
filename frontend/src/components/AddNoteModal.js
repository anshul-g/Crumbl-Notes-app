import {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../styles/Button.css'

const customStyles = {
  overlay: {
    background: 'rgb(255,255,255,0.05)',
  },

  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '35vw',
    background: '#202124',
    border: '1px solid white',
  },
};

function AddNoteModal(props) {
  const [title, setTitle] = useState('Title');
  const [content, setContent] = useState('Write it down!')

  const onTitleChange = (e) => setTitle(e.target.outerText);
  const onContentChange = (e) => setContent(e.target.outerText);

  const handleSave = async () => {
    try{
      const response = await axios.post('http://localhost:8000/api/note-create', {
        "title": title,
        "content": content
      })
      console.log(response.data);
      props.handleClose();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Modal
      isOpen={props.open}
      style={customStyles}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%' }}>
        <div
          style={{ padding: '0.5rem', border: '1px solid grey', borderRadius: '5px' }}
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
        <div
          style={{ flex: '1', padding: '0.5rem', border: '1px solid grey', borderRadius: '5px' }}
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
        <div style={{ marginLeft: 'auto', flexShrink: '0' }}>
          <button className={'primaryBtn'}>Add image</button>
          <button className={'primaryBtn'} onClick={handleSave}>Save</button>
          <button className={'primaryBtn'} onClick={props.handleClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
}

export default AddNoteModal;

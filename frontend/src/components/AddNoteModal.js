import Modal from 'react-modal';
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
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.handleCloseBtn}
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
        >
          Write it down!
        </div>
        <div style={{ marginLeft: 'auto', flexShrink: '0' }}>
          <button className={'primaryBtn'}>Add image</button>
          <button className={'primaryBtn'}>Save</button>
          <button className={'primaryBtn'} onClick={props.handleCloseBtn}>Close</button>
        </div>
      </div>
    </Modal>
  );
}

export default AddNoteModal;

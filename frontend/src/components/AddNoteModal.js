import Modal from 'react-modal';

const customStyles = {
  overlay: {
    background: 'rgb(255,255,255,0.05)'
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <textarea style={{width: '100%', resize: 'none'}} type="text" placeholder="Title..." required />
          <textarea style={{width: '100%', resize: 'none'}} type="text" placeholder="Pour it out Buddy!" required />
          <div style={{marginTop: '1rem', marginLeft: 'auto'}}>
            <button>Add image</button>
            <button>Save</button>
            <button onClick={props.handleCloseBtn}>Close</button>
          </div>
        </div>
      </Modal>
    )
}

export default AddNoteModal;
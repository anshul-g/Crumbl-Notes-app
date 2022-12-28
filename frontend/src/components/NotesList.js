import Note from '../components/Note.js';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridTemplateRows: 'masonry',
  gap: '1rem',
  padding: '2rem'
}

function NotesList() {
  return(
    <div style={style}>
      <Note />
      <Note />
    </div>
  )
}

export default NotesList;
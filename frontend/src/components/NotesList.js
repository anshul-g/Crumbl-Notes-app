import Note from '../components/Note.js';
import Masonry from 'react-masonry-css';
import '../styles/NotesList.css';

function NotesList(props) {

  const breakpointColumnsObj = {
    default: 5,
    1200: 3,
    850: 2,
    500: 1
  };

  // maps through all the notes present in the NoteList
  // and renders a <Note> component for each note in the list
  const notes = props.notes.map((note) =>
        <div> 
          <Note key={note.id} id={note.id} title={note.title} content={note.content} fetchData={props.fetchData}/>
        </div>
  )

  return(
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {notes}
    </Masonry>
  )
}

export default NotesList;
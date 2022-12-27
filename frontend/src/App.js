import NavBar from '../src/components/NavBar.js'
import AddNoteButton from '../src/components/AddNoteButton.js';

import '../src/styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddNoteButton />
    </div>
  );
}

export default App;

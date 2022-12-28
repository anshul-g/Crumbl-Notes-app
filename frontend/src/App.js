import { Routes, Route } from "react-router-dom";

import Login from '../src/components/Login.js';
import NavBar from '../src/components/NavBar.js';
import AddNoteButton from '../src/components/AddNoteButton.js';
import NotesList from './components/NotesList.js';

import '../src/styles/App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <NotesList />
      <AddNoteButton /> 
    </div>
  );
}

export default App;

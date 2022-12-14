import React from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="note-app">
      <NoteList />
    </div>
  );
}

export default App;

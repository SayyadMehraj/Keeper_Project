import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function generateNoteId() {
  return Date.now() + Math.random();
}

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const noteWithId = {
      ...newNote,
      id: newNote.id || generateNoteId(),
    };

    setNotes((prevNotes) => {
      return [...prevNotes, noteWithId];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => noteItem.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

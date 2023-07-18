import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles.css";
import Header from "./components/Header";
import Count from "./components/Count";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  function editNote(id, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <div className="left-sidebar">
          
          </div>
          <div className="main-content">
            <Count count={notes.length} />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
              <Note
                key={index}
                id={index}
                index={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
                onEdit={editNote}
                notes={notes} // Pass 'notes' state as a prop
                setNotes={setNotes} // Pass 'setNotes' function as a prop
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;

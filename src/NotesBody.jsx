import React from "react";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils";
import NotesInput from "./NotesInput";

export default class NotesBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onArchiveHandlerBack = this.onArchiveHandlerBack.bind(this);
  }
  onAddNotesHandler({ title, body }) {
    const newNotes = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    };

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNotes],
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: true } : note));
    this.setState({ notes });
  }

  onArchiveHandlerBack(id) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: false } : note));
    this.setState({ notes });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => note.archived === false);
    const archiveNotes = this.state.notes.filter((note) => note.archived === true);

    return (
      <div>
        <div className="note-app__body">
          <NotesInput AddNotes={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          {
            activeNotes.length === 0? (
              <p className="notes-list__empty-message">Tidak ada Catatan Aktif</p>
            ) : (
              <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            )
          }
          <h2>Arsip</h2>
          {archiveNotes.length === 0 ? <p className="notes-list__empty-message">Tidak ada Catatan Yang Diarsipkan</p> : <NotesList notes={archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandlerBack} />}
        </div>
      </div>
    );
  }
}

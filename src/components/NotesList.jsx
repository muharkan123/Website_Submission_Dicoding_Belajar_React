import React from "react";
import NotesItem from "../NotesItem";
import { showFormattedDate } from "../utils";

export default function NotesList({ notes, onDelete, onArchive }) {
  return (
    <>
      <div className="notes-list">
        {notes.map((notes) => (
          <NotesItem key={notes.id} {...notes} createdAt={showFormattedDate(notes.createdAt)} onDelete={onDelete} onArchive={onArchive} />
        ))}
      </div>
    </>
  );
}

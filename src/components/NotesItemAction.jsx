import React from "react";
export default function NotesItemAction({ id, onDelete, onArchive, teksTombol }) {
  return (
    <>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
          {teksTombol}
        </button>
      </div>
    </>
  );
}

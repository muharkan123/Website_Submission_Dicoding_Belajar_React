import React from "react";

export function NotesItemContent({ id, title, body, createdAt, archived }) {
  return (
    <>
      <div className="note-item__content">
        <p hidden>{id}</p>
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
        <p hidden>{archived}</p>
      </div>
    </>
  );
}

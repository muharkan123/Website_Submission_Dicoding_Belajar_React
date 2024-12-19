import React from "react";
import { NotesItemContent } from "./components/NotesItemContent";
import NotesItemAction from "./components/NotesItemAction";
export default function NotesItem({ id, title, body, createdAt, archived, onDelete, onArchive}) {
  return (
    <>
      <div className="note-item">
        <NotesItemContent id={id} title={title} body={body} createdAt={createdAt} archived={archived} />
        <NotesItemAction id={id} onDelete={onDelete} onArchive={onArchive} teksTombol={archived ? "Pindahkan" : "Arsipkan"}/>
      </div>
    </>
  );
}

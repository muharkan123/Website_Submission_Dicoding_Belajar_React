import React from "react";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils";
import NotesBody from "./NotesBody";
import NotesHeader from "./components/NotesHeader";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
  }

  render() {
    return (
      <>
        <NotesHeader />
        <NotesBody />
      </>
    );
  }
}

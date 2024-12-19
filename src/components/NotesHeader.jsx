import React from "react";

export default class NotesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.props.onSearch(event.target.value); 
  }

  render() {
    return (
      <>
        <div className="note-app__header">
          <h1>Notes - Arkz</h1>
          <div className="note-search">
            <input type="text" name="" id="" placeholder="Cari Catatan..." onChange={this.onSearchHandler}/>
          </div>
        </div>
      </>
    );
  }
}

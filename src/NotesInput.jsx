import React from "react";

export default class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 50,
      title: "",
      body: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    const judul = event.target.value.length;
    if (judul <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          limit: 50 - judul,
        };
      });
    }
  }

  handleBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.AddNotes(this.state);
    this.setState({
      title: "",
      body: "",
      limit: 50,
    });
  }

  render() {
    return (
      <>
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="note-input__title__char-limit">Sisa karakter : {this.state.limit}</div>
            <input type="text" className="note-input__title" placeholder="Buat catatan..." required onChange={this.handleTitleChange} value={this.state.title} />
            <textarea className="note-input__body" required placeholder="Buat deskripsinya disini" onChange={this.handleBodyChange} value={this.state.body}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

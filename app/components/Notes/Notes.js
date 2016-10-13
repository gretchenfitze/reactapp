import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

export default class Notes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote addNote={this.props.addNote}/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

import React from 'react';

export default class NotesList extends React.Component {
  constructor() {
    super();
  }

  render() {
    let notes = this.props.notes.map((note,index) => <li
    className="list-group-item" key={index}>{note['.value']}</li>
    );

    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}

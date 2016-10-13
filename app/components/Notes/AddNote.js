import React from 'react'

export default class AddNote extends React.Component {
  constructor() {
    super();
  }

  setRef(ref) {
    this.note = ref;
  }

  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef.bind(this)}/>
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired
}

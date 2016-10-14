import React from 'react';
import { hashHistory } from 'react-router';

export default class SearchGithub extends React.Component {
  constructor() {
    super();
  }

  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit() {
    let username = this.usernameRef.value;
    this.usernameRef.value = '';
    hashHistory.push(`profile/${username}`);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef.bind(this)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
}

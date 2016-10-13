import React from 'react';

export default class Repos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>REPOS</p>
        REPOS: {this.props.repos}
      </div>
    )
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

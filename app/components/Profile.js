import React from 'react';
import { Router, Route, Link } from 'react-router'
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

export default class Profile extends React.Component {
  constructor() {
    super();
    ReactMixin(this, ReactFireMixin)
    this.state = {
      notes: [1,2,3],
      bio: {
        name: 'M K'
      },
      repos: ['a', 'b', 'c']
    }
  }

  componentDidMount() {
    let config = {
      apiKey: "AIzaSyBQSmKH2LUgbrlczNrDVudADbHSrKk9xFE",
      authDomain: "reactapp-3144b.firebaseapp.com",
      databaseURL: "https://reactapp-3144b.firebaseio.com",
      storageBucket: "reactapp-3144b.appspot.com",
      messagingSenderId: "980557557074"
    };
    Firebase.initializeApp(config);
    this.ref = Firebase.database().ref('/');
    let childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  }

  componentWillUnmount() {
    this.unbind('notes');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio.name} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

// ReactMixin(Profile.prototype, ReactFireMixin);

import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(res => res.json())
      .then(json => { this.setState({ users: json.users }); });
  }

  renderUserList() {
    return this.state.users.map((obj, index) => {
      const url = `#/users/${index + 1}`;
      return <li key={index}><a href={url}>User {index + 1}</a></li>;
    });
  }

  render() {
    return (
      <div>Users
        <ul>{this.renderUserList()}</ul>
      </div>
    );
  }
}

export default UsersPage;

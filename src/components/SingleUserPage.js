import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          user: json
        });
      });
  }

  render() {
    return (<div>
      <p>User {this.props.id}</p>
      <p>avatar: {this.state.user.avatar}</p>
      <p>Name: {this.state.user.name}</p>
      <p>Age: {this.state.user.age}</p>
    </div>);
  }
}

export default SingleUserPage;

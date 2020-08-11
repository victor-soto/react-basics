import React, { Component } from 'react';
import Header from './Header';
import List from './List';

export default class ViewList extends Component {
  render() {
    const { data, newUser, handleClick } = this.props;

    return (
      <div>
        <Header newUser={newUser} />
        <List data={data} handleClick={handleClick} />
      </div>
    );
  }
}

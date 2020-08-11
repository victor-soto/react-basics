import React, { Component } from 'react';

export default class List extends Component {
  handleClick = id => e => {
    const { handleClick } = this.props;
    handleClick(id);
  }
  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.map(x => <li key={x.id} onClick={this.handleClick(x.id)}>{x.name}<button>Editar</button></li>)}
      </ul>
    );
  }
}

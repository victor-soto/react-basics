import React, { Component } from 'react';

const styles = {
  inline: {
    display: 'inline'
  }
}

export default class Header extends Component {
  render() {
    const { newUser } = this.props;
    return (
      <header>
        <h2 style={styles.inline}>Usuarios</h2>
        <button style={styles.inline} onClick={newUser}>Nuevo Usuario</button>
      </header>
    );
  }
}
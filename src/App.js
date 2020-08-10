import React, { Component } from 'react';
import './App.css';
import ViewList from './components/ViewList';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewList />
        <UserForm />
      </div>
    );
  }
}

export default App;

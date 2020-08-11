import React, { Component } from 'react';
import './App.css';
import ViewList from './components/ViewList';
import UserForm from './components/UserForm';
import axios from 'axios';

class App extends Component {
  state = {
    route: 'list',
    data: []
  }
  constructor() {
    super();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ data }));
  }

  selectUser = id => {
    this.setState({
      route: 'form',
      selectedUser: id
    })
  }

  appendUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(({ data }) => {
        const newData = this.state.data.concat(data);
        this.setState({
          data: newData,
          route: 'list',
        })
      })
  }

  newUser = () => {
    this.setState({ route: 'form' })
  }

  updateNewUser = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
      .then(() => {
        const newData = this.state.data.map(x => x.id === id ? values : x);
        this.setState({
          data: newData,
          route: 'list'
        });
      });
  }

  render() {
    const { route, data, selectedUser } = this.state;
    const initialValues = selectedUser && data.find(x => x.id === selectedUser);
    console.log(initialValues);
    return (
      <div className="App">
        {route === 'list' &&
          <ViewList
            data={data}
            newUser={this.newUser}
            handleClick={this.selectUser}
          />}
        {route === 'form' &&
          <UserForm
            handleSubmit={this.appendUser}
            handleUpdate={this.updateNewUser}
            initialValues={initialValues || {}}
          />}
      </div>
    );
  }
}

export default App;

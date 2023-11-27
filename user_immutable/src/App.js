import React, { Component } from 'react';
import UserList from './UserList';
import { Map, List, Record } from 'immutable';

const User = Record({
  id: null,
  username: null
});

const Data = Record({
  input: '',
  users: List()
});
class App extends Component {
  id = 3;
  
  state = {
    data: Data({
      users: List([
        User({
          id: 1,
          username: 'velopert'
        }),
        User({
          id: 2,
          username: 'mjkim'
        })
      ])
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;
    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = (e) => {
    const { data } = this.state;
    this.setState({
      data: data.set('input', '')
      .update('users', users => users.push(new User({
        id: this.id++,
        username: data.get('input')
      })))
      // .update('users', users => users.push(Map({
      //   id: this.id++,
      //   username: data.get('input')
      //})))
    })
    // this.setState(({ users, input }) => ({
    //   input: '',
    //   users: users.concat({
    //     id: this.id++,
    //     username: input
    //   })
    // }))
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { data: {input, users}} = this.state;
    // const { data } = this.state;
    // const input = data.get('input');
    // const users = data.get('users');
    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
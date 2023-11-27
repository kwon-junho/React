import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import { Component } from 'react';

class App extends Component {
  id = 2
  state = {
    information:[
      {
        id: 0,
        name: '권준호',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '권다은',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
    console.log(data);
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id 
        ? {...info, ...data}
        : info
      )
    })
  }
  render(){
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm 
          onCreate = {this.handleCreate}
        />
        <p>
          <input placeholder='검색 할  이름을 선택해주세요.'
          onChange={this.handleChange}
          value={keyword}
          />
        </p>
        <PhoneInfoList 
        // data={this.state.information}
        data={filteredList}
        onRemove={this.handleRemove} 
        onUpdate={this.handleUpdate} />
        {JSON.stringify(information)}
      </div>
    );
  }
}


export default App;

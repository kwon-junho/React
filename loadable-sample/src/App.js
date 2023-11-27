import React, { Component } from 'react';
import withSplitting from './withSplitting';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import { About, Home } from './pages';

// import SplitMe from './SplitMe';
// import notify from './notify';

// function App() {
//   function handleClick(){
//     notify();
//   };

//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
const SplitMe = withSplitting(() => import('./SplitMe'));

class App extends Component {
  state = {
    // SplitMe: null
    visible: false
  };
  handleClick = () => {
    // import('./notify').then(({default: notify }) => {
    //   notify();
    // });
    // import('./SplitMe').then(({ default: SplitMe}) => {
    //   this.setState({
    //     SplitMe
    //   })
    // });
    this.setState({
      visible: true
    });
  };
  handleMouseOver = () => {
    About.preload();
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" onMouseOver={this.handleMouseOver}>About</Link>
          </li>
        </ul>
        <hr/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <button onClick={this.handleClick}>Click Me</button>
        {visible && <SplitMe />}
      </div>
    );
  }
}

export default App;

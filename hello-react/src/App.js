import React,{ Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import './App.css'
// function App() {
class App extends Component{
  render(){
    const name = 'react';
    const value = 1;
    return (
      <Fragment>
      <div className='App'>
          hello {name};
          <div>
          {
            1 + 1 === 2
            ?(<div> ok</div>)
            :(<div> not ok</div>)
          }
          { 
            (function(){
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()        
          }
          </div>           
        </div> 
        <MyName name="리엑트"/>
        <Counter />
      </Fragment>
    );
  }
}
export default App;

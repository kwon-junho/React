import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Posts } from "pages";
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />}/>
                    <Route path="/about/:name" element={<About />}/>
                    {/* <Route path="/about/*" element={About}/> */}
                    <Route path="/posts/*" element={<Posts/>}/>    
                </Routes>
            </div>
        );
    }

}
export default App;
import React from 'react';
import {  NavLink } from 'react-router-dom';


const Menu = () => {
    const activeStyle = {color: 'green', fontSize:  '2rem'};

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => {return isActive ? activeStyle : undefined;}}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => {return isActive ? activeStyle : undefined;}}>About</NavLink></li>
                <li><NavLink to="/about/foo" style={({isActive}) => {return isActive ? activeStyle : undefined}}>About Foo</NavLink></li>
                <li><NavLink to="/posts" style={({isActive}) => {return isActive ? activeStyle : undefined}}>Posts</NavLink></li>
                {/* <li><NavLink to="/users" activeStyle={activeStyle}>Users</NavLink></li> */}
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;

//import { BrowserRouter } from 'react-router-dom'

//const rootElement = document.getElementById('root');
//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home}/>
//             <Route path="home" component={Home}/>
//             <Route path="login" component={Login}/>
//             <Route path="register" component={Register}/>
//         </Route>
//     </Router>, rootElement
// );

import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {  Route, IndexRoute } from 'react-router';
import { BrowserRouter, Routes, useLocation } from 'react-router-dom'
// Container Components
import { App, Home, Login, Register } from './containers';

// Redux
import { Provider } from 'react-redux';
// import { legacy_createStore as createStore, applyMiddleware} from "redux";
// import rootReducer from 'reducers';
import { createBrowserHistory } from 'history';
const browserhistory = createBrowserHistory()
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes history={browserhistory}>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>, rootElement
);
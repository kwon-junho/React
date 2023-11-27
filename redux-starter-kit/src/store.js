//import { createStore, applyMiddleware} from 'redux';
import { legacy_createStore as createStore, applyMiddleware} from "redux";
// createStore 
// 대체 방안 
// Yarn
//yarn add @reduxjs/toolkit
//import { configureStore } from '@reduxjs/toolkit'

// 2번째 방안
// import { legacy_createStore as createStore } from "redux";
import modules from './modules';
//import loggerMiddleware from './lib/loggerMiddleware';

//redux-logger
import { createLogger } from 'redux-logger';
//redux-thunk
import ReduxThunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';
//import { createPromise } from 'redux-promise-middleware';
import penderMiddleware from 'redux-pender';
/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/


// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
//const store = createStore(modules, applyMiddleware(loggerMiddleware))
const logger = createLogger();
// const customizedPromiseMiddleware = createPromise({
//    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
// });
// const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware))
const store = createStore(modules, applyMiddleware(logger, ReduxThunk, penderMiddleware()))

export default store;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Map, List } from 'immutable';
import { Record } from 'immutable';

// 1. 객체는 Map
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});
console.log(obj.toJS());

// 2.배열은 list
const arr = List([
  Map({ foo: 1}),
  Map({ bar: 2}),
]);
console.log(arr.toJS());

// 3.설정할땐 set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

// 4.값을 읽을땐 get
console.log(obj.get('foo'));
console.log(nextObj.get('foo'));
console.log(arr.get(0));

// 5.읽은 다음에 설정 할때는 update
// 두번쩨 파라미터는 updater 함수가 들어감
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

// 6.내부에 있는걸 ~ 할땐 in 을 붙인다.
nextObj = obj.setIn(['inner','bar'], 20);
console.log(nextObj.getIn(['inner','bar']));
let nextArr = arr.setIn([0, 'foo'],100);
console.log(nextArr.getIn([0,'foo']));

// 8.List 내장함수는 배열이랑 비슷
nextArr = arr.push(Map({ qaz: 3}));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

// 9.delete 로 key 를 지울수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());
nextArr = nextArr.delete(0);
console.log(nextArr.toJS());


const Person = Record({
  name: '홍길동',
  age: 1
});

let person = Person();
console.log(person);
console.log(person.name, person.age);

person = person.set('name','kwonjunho');
console.log(person.name);
console.log(person);
person = Person({
  name: '영희',
  age: 10
});
const { name, age } = person;
console.log(name, age);

const dog = Record({
  name: '멍멍이',
  age: 1
})

console.log(dog.name);

const nested = Record({
  foo: Record({
    bar: true
  })()
})();
console.log(nested.foo.bar);
const nextNested = nested.setIn(['foo', 'bar'],false);
console.log(nextNested);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

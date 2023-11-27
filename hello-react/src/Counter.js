import React, {Component} from 'react';

const Problematic = () =>{
    throw (new Error('버그 입니다.'));
    return (
        <div>

        </div>
    );
};
class Counter extends Component{
    state = {
        number: 0,
        foo: {
            bar: 0,
            foobar: 1
        }
    }
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            foo: {
            }
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWillMount (deprecated');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0 ) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate (deprecated');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentWillUpdate'+prevState.number);
    }
    handleIncrease = () => {
        // 방법1
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
        // 방법 2
        // this.setState(
        //     (state) => ({
        //         number: state.number + 1
        //     })
        // );
        // 방법 3
        //this.setState({
        //     number: this.state.number + 1,
        //     foo: {
        //         ...this.state.foo,
        //         foobar: 2,
        //     }
        // });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number -1
        });
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    render(){
        if(this.state.error) return (<h1>에러발생!!!!</h1>);
        console.log('render');
        return (
            <div>
                <h1>카운터 </h1>
                <div>값 : {this.state.number}</div>
                <div>foo : {this.state.foo.foobar}</div>
                {this.state.number ===4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';
// import axios from 'axios';

class App extends Component {

    componentDidMount(){
      //axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response.data));
      const { number } = this.props;
      //PostActions.getPost(number);
      this.getPost(number);
    }

    componentWillReceiveProps(nextProps){
        //const { PostActions } = this.props;
        if(this.props.number !== nextProps.number){
            // PostActions.getPost(nextProps.number);
            this.getPost(nextProps.number);
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;
        try{
            await PostActions.getPost(postId);
            console.log('요청이 완료 된 다음에 실행');
        }catch(e){
            console.log('에러가 발생!!!');
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                {/* <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button> */}
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>
                { loading && <h2>로딩중</h2>}
                { error 
                    ? <h1>에러발생</h1>
                    : ( 
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>    
                    )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending['GET_POST'],
        error: state.post.error['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);
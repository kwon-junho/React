import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
// import * as todoActions from 'store/modules/todo';
import { TodoActions } from 'store/actionCreators';

class TodosContainer extends Component {
    handleChange = (e) => {
        //인풋 값  변경
        //const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }
    handleInsert = () => {
        //const { input, TodoActions } = this.props;
        const { input } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }
    handleToggle = (id) => {
        // const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }
    handleRemove = (id) => {
        // const { TodoActions } = this.props;
        TodoActions.remove(id);
    }    
    render() {
        const { handleChange ,handleInsert, handleToggle, handleRemove} = this;
        const { input, todos } = this.props;
        return (
            <Todos 
                input={input}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
                />
        );
    }
}

export default connect(
    // state 를 비구조화 할당 해주었습니다
    ({ todo }) => ({
      // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
      input: todo.input,
      todos: todo.todos
    })
    // (dispatch) => ({
    //   TodoActions: bindActionCreators(todoActions, dispatch)
    // })
)(TodosContainer);
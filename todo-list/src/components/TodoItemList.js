import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {


    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
        ({id, text, checked, color}) => (
            // (todo) => (
            <TodoItem
                // {...todo}
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
            color={color}
            />
        )
        );

        return (
        <div>
            {todoList}    
        </div>
        );
    }
}

export default TodoItemList;
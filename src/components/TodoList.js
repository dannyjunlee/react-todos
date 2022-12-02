import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <div>
            <p>X Todos Remaining</p>
            <ul>
                {todos.map((todo, index) => <TodoItem key={index} todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList;
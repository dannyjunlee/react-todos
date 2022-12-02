import React from 'react';



const TodoItem = ({ todo: { text, complete } }) => {
    const style = {
        complete: {
            textDecoration: complete ? 'line-through' : ''
        }
    };

    return (
        <div>
            <span className={`todo-text`} style={style.complete}>
                {text} 
            </span>
            {complete 
            ? <button>mark as incomplete</button> 
            : <button>complete</button>}
        </div>
    )
}

export default TodoItem;
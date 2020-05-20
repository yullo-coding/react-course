import React from 'react';

const Todo = ({todo}) => {
   return (
    <div>
        <div>{todo.title}</div>
        <div>{todo.body}</div>
        <div>{todo.finishedAt}</div>
    </div>
   );
}

export default Todo;
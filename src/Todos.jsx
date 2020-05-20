import React, { useEffect } from 'react';
import Todo from './Todo';

const Todos = ({ }) => {

    let todos = [
        {
            title: "빨래널기",
            body: "빨래를 야무지게",
            finishedAt: "20190415"
        }
    ];

    useEffect(() => {
        // 할일 목록 서버에 요청하기
        // setTodos(결과값);
    }, []);

    return (
        <div>
            {
                 todos.map((todo) => {
                    <Todo todo={todo} />
                 })
            }
        </div>
    );
}
export default Todos;
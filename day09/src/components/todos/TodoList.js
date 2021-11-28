import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useContext(TodosContext)
    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
                
            }
        </ul>
    );
};

export default TodoList;
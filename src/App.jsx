import { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './styles.css';

export default function App() {
    const [TODO, setTODO] = useState(() => {
      const localValue = localStorage.getItem("ITEMS")
      if (localValue == null) return [];

      return JSON.parse(localValue);
    });

    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(TODO))
    }, [TODO]);

    function addTodo(title) {
        setTODO((currentTODO) => {
          return [...currentTODO, { id: crypto.randomUUID(), title, completed: false }];
        });
    }

    function toggleTodo(id, completed) {
        setTODO((currentTODO) => {
          return currentTODO.map((todo) => {
              return todo.id === id ? { ...todo, completed } : todo;
          });
        });
    }

    function deleteTodo(id) {
        setTODO((currentTODO) => {
          return currentTODO.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
          <NewTodoForm onSubmit={addTodo} />
          <h1 className="header">TODO List</h1>
          <TodoList todos={TODO} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}

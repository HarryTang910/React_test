import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && 'No TODOs'}
            {todos.map((item) => {
                return (
                    <TodoItem {...item} key={item.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                );
            })}
        </ul>
    );
}

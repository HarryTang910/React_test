export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return (
        <li>
        <label>
            <input
                type="checkbox"
                id="item-1"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {title}
        </label>
        <button
            className="btn btn-danger"
            onClick={() => deleteTodo(id)}
        >
            Delete
        </button>
    </li>
    );
}

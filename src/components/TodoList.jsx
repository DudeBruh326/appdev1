function TodoList({ todos }) {
    return (
        <div>
            {todos && todos.length > 0 ? (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No todos found</p>
            )}
        </div>
    )
}

export default TodoList



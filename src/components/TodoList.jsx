<<<<<<< HEAD
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList
=======
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


>>>>>>> d1394555a18fd4805ce357ccc815f5bfe3c5469e

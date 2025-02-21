import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    if (editingTodo) {
      setTodos((prev) =>
        prev.map((t) => (t.id === editingTodo.id ? { ...t, ...todo } : t))
      );
      setEditingTodo(null);
    } else {
      setTodos([...todos, { ...todo, id: Date.now(), finished: false }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} editingTodo={editingTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

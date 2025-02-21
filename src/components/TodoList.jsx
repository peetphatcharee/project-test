export default function TodoList({ todos, deleteTodo, editTodo }) {
    return (
<div>
  {todos.length > 0 ? (
   
    <table  className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className=" p-2">Seq</th>
            <th className=" p-2">Task</th>
            <th className=" p-2">Date</th>
            <th className=" p-2"></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id} className="">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{todo.name}</td>
              <td className="p-2">{todo.date_start}</td>
              <td className="p-2 flex justify-center">
                <button onClick={() => editTodo(todo)} className="text-blue-500 mr-2">
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p className="text-center text-gray-500">Not found </p>
      )}
</div>
    ) 
  
  }
  
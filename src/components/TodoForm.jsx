import { useState, useEffect } from "react";

export default function TodoForm({ addTodo, editingTodo }) {
  const [name, setName] = useState("");
  const [date_start, setDateStart] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setName(editingTodo.name);
      setDateStart(editingTodo.date_start);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date_start) return;
    addTodo({ name, date_start });
    setName("");
    setDateStart("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded ">
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
        Task Name 
        <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="task name"
          required
        />
      </div>
      <div>
        <label htmlFor="date_start" className="block mb-2 text-sm font-medium text-gray-900">
          Start Date<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="date"
          id="date_start"
          value={date_start}
          onChange={(e) => setDateStart(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      
    </div>
    <div className="flex justify-end">
       <button type="submit" className="bg-blue-500 text-dark px-4 py-2 rounded">
      {editingTodo ? "Update" : "Add"}
    </button>
    </div>
   
  </form>
   
  );
}
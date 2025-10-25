import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function Home() {
  const { addTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <div className="flex justify-center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          className="p-2 border rounded-l-md"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
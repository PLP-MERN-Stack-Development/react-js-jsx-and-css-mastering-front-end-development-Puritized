import React from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskManager() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Go to Home and add one!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-3 border rounded-md"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`flex-grow cursor-pointer ${
                  task.done ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
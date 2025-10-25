import React from "react";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Tasks</h1>
      <TaskManager />
    </div>
  );
}
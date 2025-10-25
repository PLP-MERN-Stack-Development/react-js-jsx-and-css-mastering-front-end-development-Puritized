import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./features/TaskManager";
import PostsList from "./features/PostsList";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<PostsList />} />
      </Routes>
    </TaskProvider>
  );
}
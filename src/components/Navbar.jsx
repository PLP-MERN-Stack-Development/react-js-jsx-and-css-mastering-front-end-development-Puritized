import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          PLP Task Manager
        </h1>
        <div className="flex gap-4">
          <Link to="/react-js-jsx-and-css-mastering-front-end-development-Puritized/" className="hover:underline">Home</Link>
          <Link to="/react-js-jsx-and-css-mastering-front-end-development-Puritized/tasks" className="hover:underline">Tasks</Link>
          <Link to="/react-js-jsx-and-css-mastering-front-end-development-Puritized/api" className="hover:underline">API Data</Link>
        </div>
      </div>
    </nav>
  );

}

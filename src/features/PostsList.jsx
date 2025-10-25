import React, { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10))) // get 10 posts
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Posts List</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-3 border rounded-lg bg-white dark:bg-gray-800">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
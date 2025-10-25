import React, { useState, useEffect } from "react";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Fetched API Data</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.slice(0, 20).map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";

// useEffect with fetch data by ID.
function FetchEffectById() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const item = await response.json();

      setPost(item);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      {loading ? <h1>Loading...</h1> : <h1>{post.title}</h1>}
    </div>
  );
}

export default FetchEffectById;

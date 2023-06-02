import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../context/posts/actions";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={handlePrev} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNext}>Próxima</button>
    </div>
  );
}

export default PostsList;
